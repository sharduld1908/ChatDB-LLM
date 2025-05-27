import 'reflect-metadata'; 
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { RunnablePassthrough, RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { SqlDatabase } from 'langchain/sql_db';
import { PromptTemplate } from "@langchain/core/prompts";

dotenv.config();

const googleApiKey = process.env.GOOGLE_API_KEY;
if (!googleApiKey) {
  console.error('GOOGLE_API_KEY not found in environment');
  process.exit(1);
}

// 1) Set up Gemini
const model = new ChatGoogleGenerativeAI({
  apiKey: googleApiKey,
  model: "gemini-2.0-flash",  
  maxOutputTokens: 2048,
  temperature: 0.0,
  maxRetries: 2,
});

// 2) Initialize TypeORM + wrap in SqlDatabase
const datasource = new DataSource({
  type: 'sqlite',
  database: 'Chinook.db',
});
await datasource.initialize();

const db = await SqlDatabase.fromDataSourceParams({
  appDataSource: datasource,
});

// 3) Prompt template
const sqlPrompt = PromptTemplate.fromTemplate(`
Based on the table schema below, write a SQL query that would answer the user's question.
Return only the SQL text formatted for understanding, with NO backticks and NO Markdown formatting.

Take into account that the database is SQLite, so use SQLite syntax.
Avoid using any non-SQLite features.
Add Column aliases to the SELECT statement if needed.

{schema}

Question: {question}
`);


// 4) SQL‐generation chain (stop at the first \`\`\`)
const sqlQueryGeneratorChain = RunnableSequence.from([
  RunnablePassthrough.assign({
    schema: async () => db.getTableInfo(),
    question: (input) => input.question,
  }),
  sqlPrompt,
  model,
  new StringOutputParser(),
]);

function stripFences(sql) {
  return sql
    .trim()
    .replace(/^```(?:sql)?\s*/, "")
    .replace(/\s*```$/, "")
    .trim();
}

/**
 * generateSql(question: string) => Promise<string>
 * Generates and returns the raw SQL for the given natural-language question.
 */
export async function generateSql(question) {
  const result = await sqlQueryGeneratorChain.invoke({ question });
  return stripFences(result);
}

const explanationPrompt = PromptTemplate.fromTemplate(`
You are a SQL instructor. Based on the table schema, the question and the SQL query below, help me understand how to write the SQL query step by step.

{schema}

Question: {question}
SQL Query: {sql}
Explain how to write the SQL query step by step, using human language.
`);

const explanationChain = RunnableSequence.from([
  RunnablePassthrough.assign({
    schema: async () => db.getTableInfo(),
    question: (input) => input.question,
    sql: (input) => stripFences(input.sql),
  }),
  explanationPrompt,
  model,
  new StringOutputParser(),
]);

/**
 * explainSql(sql: string) => Promise<string>
 * Returns a human-language, step-by-step explanation of how to write the given SQL query.
 */
export async function explainSql(question,sql) {
  const result = await explanationChain.invoke({ question,sql });
  return result;
}


// 5) Smoke-test
// async function testShowAllArtists() {
//   const question = 'How many artists are in the database?';
//   const result = await sqlQueryGeneratorChain.invoke({ question });
  
//   console.log('\n=== Generated SQL ===\n', stripFences(result));

//   const rows = await db.run(stripFences(result));
//   console.log('\n=== Result ===');
//   console.table(rows);
// }

// await testShowAllArtists();