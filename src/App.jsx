import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      hello

      <Navbar />
      <About />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
