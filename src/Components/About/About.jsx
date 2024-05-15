import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>A propos de l'université</h3>
        <h2>Ipsum est un générateur</h2>
        <p>
        Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes. Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes.
        Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte.
        </p>
        <p>
        Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes. Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes.
        Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte.
        </p>        
      </div>
    </div>
  )
}

export default About
