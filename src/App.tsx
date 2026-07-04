import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import WhyHireMe from './components/WhyHireMe'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen" style={{ backgroundColor: darkMode ? '#0F172A' : '#F1F5F9', color: darkMode ? '#F8FAFC' : '#0F172A' }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Experience />
        <WhyHireMe />
        <GitHub />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
