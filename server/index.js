// Express server setup
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { generateSql } from './llm-core.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
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
    
    // Respond with the generated SQL query
    res.status(200).json({ sqlQuery });
  } 
  catch (error) {
    console.error('Error processing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});