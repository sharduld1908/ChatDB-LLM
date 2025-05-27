import { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './index.module.css'
import sqlLogo from './assets/sql-server.png'
import geminiLogo from './assets/gemini.png'

function App() {
  const [query, setQuery] = useState('')
  const [explanation, setExplanation] = useState('')
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const response = await axios.post('http://localhost:8080/api/query', {
        question: query,
      })
      setExplanation(response.data.explanation)
    } catch (err) {
      console.error(err)
      setError('Failed to generate SQL.')
    }
  }

  useEffect(() => {
    console.log('Explanation updated:', explanation)
  }, [explanation])

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
            <p>Table Goes here</p>
          </div>
        </div>
      )}

    </main>
  )
}

export default App
