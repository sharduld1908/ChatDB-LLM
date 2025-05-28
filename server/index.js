// Express server setup
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { generateSql, explainSql, runSQLStatement } from './llm-core.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const raw = process.env.CLIENT_URL || 'http://localhost:5173';
const CLIENT_URL = raw.replace(/\/+$/, '');

// Middleware setup
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic route to check server status
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Example route for handling SQL queries
app.post('/api/query', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    console.log('Received question:', question);
    
    // Call the generateSql function to process the question
    const sqlQuery = await generateSql(question);
    console.log('Generated SQL query:', sqlQuery);

    const explanation = await explainSql(question, sqlQuery);
    console.log('Generated explanation:', explanation);
    
    // Respond with the generated SQL query
    res.status(200).json({ sqlQuery, explanation });
  } 
  catch (error) {
    console.error('Error processing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Example route for handling SQL queries
app.post('/api/data', async (req, res) => {
  const { sql } = req.body;

  if (!sql) {
    return res.status(400).json({ error: 'SQL is required' });
  }

  try {
    console.log('Received SQL:', sql);

    // Call the runSQLStatement function to execute the SQL
    const result = await runSQLStatement(sql);
    console.log('SQL execution result:', result);
    
    // Respond with the generated SQL query
    res.status(200).json({ result });
  } 
  catch (error) {
    console.error('Error processing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});