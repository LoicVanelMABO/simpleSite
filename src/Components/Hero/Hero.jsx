import React from 'react'
import './Hero.css'
import heroIcone from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text container">
            <h1>Assurer une meilleure éducation pour un meilleur monde</h1>
            <p>
            Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes. Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes.

            Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte.
            </p>
            <button className='btn'>En savoir plus <img src={heroIcone} alt=''/> </button>
        </div>      
    </div>
  )
}

export default Hero
