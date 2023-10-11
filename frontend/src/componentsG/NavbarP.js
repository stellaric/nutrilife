import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

export default function NavbarP() {
  return (
    <nav className='navbar'>
      <div className='logo'>logo</div>
      <div className='onglets'>
      <Link to={"profil"}>Profil</Link>
      <Link to={"/documentation"}>Documentation</Link>
      <Link to={"/"}><Icon icon="iconamoon:exit" color="white"  width="45" height="45" /></Link>
      </div>
    </nav>
  )
}
