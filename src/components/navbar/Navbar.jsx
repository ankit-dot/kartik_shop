import React from 'react'
import "./Navbar.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Navbar() {
  return (
    
    <div className='header'>
        <nav className="navbar">
            <div className="nav-content">
                <div className="logo"><h2>Dry Cleaners</h2></div>
                <ul>
                    <li><Link to={'/'} className="home"> Home </Link></li>
                    <li><Link to={'/about'} className="about">About</Link></li>
                    <li><Link to={'/pricing'} className="pricing">Pricing</Link></li>
                    <li><Link to={'/contact'} className="contact">Contact</Link></li>
                </ul>

                <button className='Admin_button'>
                    Owner
                </button>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar