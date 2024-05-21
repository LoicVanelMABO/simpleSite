import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if (tx < 0){
            tx += 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='Testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Willams Tchelibo 1</h3>
                            <span>Monrovia, LIBERIA</span>
                        </div>
                    </div>
                    <p>
                    De tout temps, l'homme a tenté de comprendre puis de reproduire l'extraordinaire 
                    machine qu'est l'être humain. Les premiers automates nous font sourire aujourd'hui.
                    Les premiers ordinateurs également, mais un peu moins. Et lorsqu'un certain McCullogn, 
                    aidé de Pitts, invente en 1943 le premier neurone formel, on ne rigole plus. 
                    L'ordinateur est devenu capable de reproduire des neurones artificiels. 
                    Le "complexe de Frankenstein" va alors freiner les recherches. On commence à entendre 
                    parler du concept d'Intelligence Artificielle, plus connu sous les termes d'IA. Cela fait peur.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Willams Tchelibo 2</h3>
                            <span>Monrovia, LIBERIA</span>
                        </div>
                    </div>
                    <p>
                    De tout temps, l'homme a tenté de comprendre puis de reproduire l'extraordinaire 
                    machine qu'est l'être humain. Les premiers automates nous font sourire aujourd'hui.
                    Les premiers ordinateurs également, mais un peu moins. Et lorsqu'un certain McCullogn, 
                    aidé de Pitts, invente en 1943 le premier neurone formel, on ne rigole plus. 
                    L'ordinateur est devenu capable de reproduire des neurones artificiels. 
                    Le "complexe de Frankenstein" va alors freiner les recherches. On commence à entendre 
                    parler du concept d'Intelligence Artificielle, plus connu sous les termes d'IA. Cela fait peur.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Willams Tchelibo 3</h3>
                            <span>Monrovia, LIBERIA</span>
                        </div>
                    </div>
                    <p>
                    De tout temps, l'homme a tenté de comprendre puis de reproduire l'extraordinaire 
                    machine qu'est l'être humain. Les premiers automates nous font sourire aujourd'hui.
                    Les premiers ordinateurs également, mais un peu moins. Et lorsqu'un certain McCullogn, 
                    aidé de Pitts, invente en 1943 le premier neurone formel, on ne rigole plus. 
                    L'ordinateur est devenu capable de reproduire des neurones artificiels. 
                    Le "complexe de Frankenstein" va alors freiner les recherches. On commence à entendre 
                    parler du concept d'Intelligence Artificielle, plus connu sous les termes d'IA. Cela fait peur.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Willams Tchelibo 4</h3>
                            <span>Monrovia, LIBERIA</span>
                        </div>
                    </div>
                    <p>
                    De tout temps, l'homme a tenté de comprendre puis de reproduire l'extraordinaire 
                    machine qu'est l'être humain. Les premiers automates nous font sourire aujourd'hui.
                    Les premiers ordinateurs également, mais un peu moins. Et lorsqu'un certain McCullogn, 
                    aidé de Pitts, invente en 1943 le premier neurone formel, on ne rigole plus. 
                    L'ordinateur est devenu capable de reproduire des neurones artificiels. 
                    Le "complexe de Frankenstein" va alors freiner les recherches. On commence à entendre 
                    parler du concept d'Intelligence Artificielle, plus connu sous les termes d'IA. Cela fait peur.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
