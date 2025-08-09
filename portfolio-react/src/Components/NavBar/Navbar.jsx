import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");

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
        <li className={menu === "home" ? "active" : ""}>
          <a href="#home" onClick={() => setMenu("home")}>Home</a>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <a href="#about" onClick={() => setMenu("about")}>About Me</a>
        </li>
        <li className={menu === "skillTech" ? "active" : ""}>
          <a href="#skillTech" onClick={() => setMenu("skillTech")}>SkillTech</a>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <a href="#services" onClick={() => setMenu("services")}>Services</a>
        </li>
        <li className={menu === "projects" ? "active" : ""}>
          <a href="#projects" onClick={() => setMenu("projects")}>Projects</a>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <a href="#contact" onClick={() => setMenu("contact")}>Contact</a>
        </li>
      </ul>

      <div className="nav-connect"><a href="#contact" onClick={() => setMenu("contact")}>Connect With Me</a></div>
    </div>
  );
};

export default Navbar;
