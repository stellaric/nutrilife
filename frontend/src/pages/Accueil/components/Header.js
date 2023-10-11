import React from 'react'
import Navbar from '../../../componentsG/Navbar'
import '../Accueil.css'
export default function Header() {

  
  return (
    <header className='header_accueil'>
   <Navbar/>
 <h1>NutriLife</h1>
  
     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 274" fill="none">
<path d="M1440 3.05176e-05L1320 39.0251C1200 78.0501 960 156.1 720 156.1C480 156.1 240 78.0501 120 39.0251L0 3.05176e-05V273.175L120 273.175C240 273.175 480 273.175 720 273.175C960 273.175 1200 273.175 1320 273.175L1440 273.175V3.05176e-05Z" fill="white" />
</svg>
    </header>
  )
}
