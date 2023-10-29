import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="navbar">
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
}
