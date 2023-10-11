import React from 'react'
import '../App.css'
import '../mobile.css'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="lien">
       <Link to="/"><Icon icon="line-md:facebook" /></Link>
       <Link to="/"><Icon icon="line-md:twitter" /></Link>
       <Link to="/"><Icon icon="line-md:github" /></Link>
       <Link to="/"><Icon icon="line-md:discord" /></Link>
        
      </div>
      <div className="copyright">
        <p>NutriLife API - 2023</p>
      </div>
    </footer>
  )
}
