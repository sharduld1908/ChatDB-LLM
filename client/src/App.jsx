import { useEffect, useState } from 'react'
import DataTable from './Datatable'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './index.module.css'
import sqlLogo from './assets/sql-server.png'
import geminiLogo from './assets/gemini.png'

// 👇 read from VITE_-prefixed var
const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:8080'
 
function App() {
  const [query, setQuery] = useState('')
  const [explanation, setExplanation] = useState('')
  const [sqlData, setSqlData] = useState(null)
  const [sqlQuery, setSqlQuery] = useState('')
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const response = await axios.post(`${SERVER_URL}/api/query`, {
        question: query,
      });
      setSqlQuery(response.data.sqlQuery)
      setExplanation(response.data.explanation)
    } catch (err) {
      console.error(err)
      setError('Failed to generate SQL.')
    }
  }

  useEffect(() => {
    const executeQuery = async () => {
      if (sqlQuery) {
        try {
          console.log('Executing SQL query:', sqlQuery);
          const response = await axios.post(`${SERVER_URL}/api/data`, {
            sql: sqlQuery,
          });
          setSqlData(JSON.parse(response.data.result));
          console.log('SQL execution result:', response.data.result);
        } catch (error) {
          console.error('Error executing SQL query:', error);
        }
      } else {
        console.log('No SQL query to execute.');
      }
    };

    executeQuery();
  }, [sqlQuery]);

  useEffect(() => {
    console.log('SQL Data updated:', sqlData);
    console.log('Type of sqlData:', typeof sqlData);
  }
  , [sqlData]);

  return (
    <main className={styles.main}>
      <div>
        <img src={sqlLogo} className={styles.icon} alt="SQL Server Logo" />
        <img src={geminiLogo} className={styles.icon} alt="Gemini Logo" />
      </div>
      
      <h3>CHATDB + LLM</h3>
      <p>Your personal SQL Trainer</p>

      <form onSubmit={onSubmit}>
        <input type="text" 
        name='query-desc'
        placeholder='Ask me a question'
        onChange={(e) => {setQuery(e.target.value)}}/>

        <input type='submit' value="Generate Answer" />
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {explanation && (
        <div className={styles.queryOutputContainer}>
          <div className={styles.queryOutput}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {explanation}
            </ReactMarkdown>
          </div>
          <div className={styles.queryOutput}>
            <DataTable data={sqlData} />
          </div>
        </div>
      )}

    </main>
  )
}

export default App
