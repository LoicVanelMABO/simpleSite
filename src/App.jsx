import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/programs/Program'
import About from './Components/About/About'
import Title from './Components/title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subtitle='Notre programme' title='Ce que Nous Offrons'/>
        <Program/>
        <About/>
      </div>
    </div>
  )
}

export default App
