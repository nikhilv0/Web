import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Connect With Me</div>

    </div>
  );
};

export default Navbar;
