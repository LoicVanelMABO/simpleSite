import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/programs/Program'
import About from './Components/About/About'
import Title from './Components/title/Title'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonals/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subtitle='Notre programme' title='Ce que Nous Offrons'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Notre Campus' title='Les Photos de notre Campus'/>
        <Campus/>
        <Title subtitle='Témoignages' title='Que Disent les Etudiants ?'/>
        <Testimonials/>
        <Title subtitle='Contactez-Nous' title='Get in Touch...'/>
        <Contact/>
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
