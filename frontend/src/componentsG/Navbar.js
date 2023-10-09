import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>logo</div>
      <div className='onglets'>
      <Link to={"/"}>Accueil</Link>
      <Link to={"/"}>Contact</Link>
      <Link to={"/"}><Icon icon="iconamoon:profile-circle-thin" color="white" width="60" height="60" /></Link>
      </div>
    </nav>
  )
}
