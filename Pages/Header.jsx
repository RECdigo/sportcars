import React from 'react'
import './header.css'
import logo from '../images/logo.png'

function Header({handleToggleMenu, toggleMenu}) {
  return (
    <header>
      <span className="year">2018 - 2023</span>
      <a href="#" className="logo" alt='logo'><img src={logo} alt="logo" /></a>
      <a href="#" className={`menu ${toggleMenu ? 'active' :undefined}`} onClick={handleToggleMenu}></a>  
    </header>
  )
}

export default Header
