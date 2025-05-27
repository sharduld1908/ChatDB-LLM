import { useState } from 'react'
import axios from 'axios'
import styles from './index.module.css'
import sqlLogo from './assets/sql-server.png'
import geminiLogo from './assets/gemini.png'

function App() {
  const [query, setQuery] = useState('')
  const [sqlQuery, setSqlQuery] = useState('')
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const response = await axios.post('http://localhost:8080/api/query', {
        question: query,
      })
      setSqlQuery(response.data.sqlQuery)     // ← grab the SQL from the JSON payload
    } catch (err) {
      console.error(err)
      setError('Failed to generate SQL.')
    }
  }

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
      {sqlQuery && (
        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
          <h4>Generated SQL:</h4>
          <pre>{sqlQuery}</pre>
        </div>
      )}
    </main>
  )
}

export default App
