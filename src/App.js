import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App