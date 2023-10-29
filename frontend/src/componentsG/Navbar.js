import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
<<<<<<< HEAD
=======
import logo from '../media/img/logo_nutrilife.png'
>>>>>>> refs/remotes/origin/main


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
export default function Navbar() {
  return (
    <nav className="navbar">
<<<<<<< HEAD
      <div className="logo">logo</div>
      <div className="onglets">
        <Link to={"/"}>Accueil</Link>
        <Link to={"/utilisateurs"}>utilisateurs </Link>
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
    </nav>
  );
=======
    <div className="menu_ordi">
    <div className="logo">
    <img src={logo} alt="logo" />
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
>>>>>>> refs/remotes/origin/main
}
