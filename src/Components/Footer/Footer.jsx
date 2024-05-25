import React from 'react'
import './Footer.css'

import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2024 Loic MABO. Almost all rights reserved. build with <FcLike/></p>
      <ul>
        <li>Tems of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
