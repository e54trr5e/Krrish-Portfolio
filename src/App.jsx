import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificate  from './components/Certificate'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    })
    document.documentElement.classList.add('dark');
  }, [])
  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');

  }


  return (
    <div className={
        darkMode
          ? 'bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen'
          : 'bg-linear-to-br from-gray-50 to-red-50 min-h-screen'
      } >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero/>
      <About/>
      <Skills/>
      <Certificate/>
      <Project/>
      <Contact/>
      </div>
  )
}

export default App
