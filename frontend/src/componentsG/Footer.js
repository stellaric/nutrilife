import React from 'react'
import '../App.css'
import '../mobile.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="lien">
       <Link to="/">Test</Link>
       <Link to="/">Test</Link>
       <Link to="/">Test</Link>
       <Link to="/">Test</Link>
        
      </div>
      <div className="copyright">
        <p>NutriLife API - 2023</p>
      </div>
    </footer>
  )
}
