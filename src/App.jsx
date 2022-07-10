import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Home from './Components/Home'


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </div>
  )
}

export default App
