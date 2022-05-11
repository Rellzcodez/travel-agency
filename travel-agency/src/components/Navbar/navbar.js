import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
    <div className='logo'>
      Arctic Travels
      
    </div>

    <ul className='nav-links'>
      <li>   <Link to="about">About</Link> </li>
      <li>  <Link to="support">Support</Link></li>
      <li>  <Link to="language">Language</Link></li>
      <li>  <Link to="sign">Sign in</Link></li>
    </ul>

    </div>
  )
}

export default Navbar