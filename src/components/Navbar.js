import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='containerBody'>
        <nav className='navbar'>
            <div className='logo-title'> Dreamy Cafe </div>
            <a href='#' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links'>
                <ul>
                    <li><a href='/'> Home</a></li>
                    <li><a href='/menu'>Menu </a></li>
                   <li> <a href='/aboutus'>About Us</a></li>
                    <li><a href='/books'>books</a></li>
                </ul>
            </div>
        </nav>
</div>
  )
}
export default Navbar
