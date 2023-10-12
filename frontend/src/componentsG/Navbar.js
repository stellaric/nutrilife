import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="menu_ordi">
    <div className="logo">
      <p>Nutrilife</p>
    </div>
    <div className="onglets">
      <Link to={"/"}>Accueil</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/authentification"}>
        <Icon
          icon="iconamoon:profile-circle-thin"
          color="white"
          width="60"
          height="60"
        />
      </Link>
    </div>
    </div>

    <div className="menu_mobile">
    <div className="logo">
      <p>Nutrilife</p>
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
            <p>Nutrilife</p>
          </Link>
          <div className="onglets_mobile">
            <Link to={"/"}>Accueil</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/authentification"}>
              <Icon
                icon="iconamoon:profile-circle-thin"
                color="white"
                width="60"
                height="60"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
