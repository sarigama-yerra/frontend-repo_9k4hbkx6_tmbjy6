import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* top nav with search */}
      <Navbar query={query} setQuery={setQuery} />

      {/* hero */}
      <Hero />

      {/* catalog grid */}
      <Catalog query={query} />

      {/* footer */}
      <Footer />
    </div>
  )
}

export default App
