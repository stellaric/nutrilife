import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import logo from '../media/img/logo_nutrilife.png'

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default function NavbarP() {
  return (
    <nav className='navbar'>
          <div className="menu_ordi">
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='onglets'>
      <Link to={"/profil"}>Profil</Link>
      <Link to={"/documentation"}>Documentation</Link>
      <Link to={"/"}><Icon icon="iconamoon:exit" color="white"  width="45" height="45" /></Link>
      </div>
      </div>

      
      <div className="menu_mobile">
    <div className="logo">
    <img src={logo} alt="logo" />
    </div>
      <span className="burger" onClick={openNav}>
        ☰
      </span>
      <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <div className="overlay-content">
          <Link to={"/"}>
          <img src={logo} alt="logo" />
          </Link>
          <div className="onglets_mobile">
                <Link to={"/profil"}>Profil</Link>
      <Link to={"/documentation"}>Documentation</Link>
      <Link to={"/"}><Icon icon="iconamoon:exit" color="white"  width="45" height="45" /></Link>
          </div>
        </div>
      </div>
    </div>
    </nav>
  )
}
