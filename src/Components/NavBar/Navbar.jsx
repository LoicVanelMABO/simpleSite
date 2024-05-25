import React, { useEffect, useState } from 'react'
import '../Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import { FcElectricalSensor } from 'react-icons/fc';

const Navbar = () => {
  // pour gerer le backend sur le nav bar lorsqu'on scroll
  const [stricky, setstricky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50? setstricky(true) : setstricky(false);
    })
  },[])

  // Gerer le menu sur le cote pour les petits ecrans
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);
  }
  return (
    <nav className={`container ${stricky? 'darkNav' : ''}`}>
        <img className='logo' src= {logo} />
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
            <li>
              <Link to="hero" smooth={true} offset={0} duration={500}>              
                Home
              </Link>
            </li>
            <li>
              <Link to="programs" smooth={true} offset={-260} duration={500}> 
                Programs
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-150} duration={500}> 
                About Us
              </Link>
            </li>
            <li>
              <Link to="campus" smooth={true} offset={-260} duration={500}> 
                Campus
              </Link>
            </li>
            <li>
              <Link to="Testimonials" smooth={true} offset={-260} duration={500}> 
                Testimonials
              </Link>
            </li>
            <li><Link offset={-260} to= "contact" className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
