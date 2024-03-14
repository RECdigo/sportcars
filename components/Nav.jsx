import React from 'react'
import './nav.css'
import navData from '../Data/navData'

function nav({toggleMenu}) {
  return (
    
    <ul className={`nav ${toggleMenu ? 'active' : undefined}`}>
      {
        navData.map(nav => (
          <li><a href="#">{nav.type}</a></li>      
      
        ))           
      
      }
    </ul>
  )
}

export default nav
