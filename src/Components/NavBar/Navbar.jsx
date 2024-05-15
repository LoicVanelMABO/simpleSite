import React, { useEffect, useState } from 'react'
import '../Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [stricky, setstricky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50? setstricky(true) : setstricky(false);
    })
  },[])
  return (
    <nav className={`container ${stricky? 'darkNav' : ''}`}>
        <img className='logo' src= {logo} />
        <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
