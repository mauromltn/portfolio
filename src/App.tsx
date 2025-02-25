import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import About from './components/ui/About'
import './styles/globals.scss'
import Project from './components/ui/Project'
import Skill from './components/ui/Skill'
import ContactForm from './components/ui/Contact'
import Footer from './components/ui/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Project />
        <Skill />
        <h1>Contact Me</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
