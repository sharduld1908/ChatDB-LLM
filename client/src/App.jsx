import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body/Body'

function App() {

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header />

      <main className="flex-1 overflow-y-auto">
        <Body />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
