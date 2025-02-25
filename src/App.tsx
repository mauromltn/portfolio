import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import About from './components/ui/About'
import './styles/globals.scss'
import Project from './components/ui/Project'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Project />
      </main>
    </>
  )
}

export default App
