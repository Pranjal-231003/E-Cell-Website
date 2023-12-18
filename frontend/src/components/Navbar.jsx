import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from "./assets/image/logo.svg";
import { FaBars, FaTimes } from 'react-icons/fa';
import './assets/css/Navbar.css';
import ESummit from './ESummit/ESummit.js';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showESummit, setShowESummit] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openESummit = () => {
    console.log("Opening E-Summit");
    setShowESummit(true);
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    setShowESummit(false);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to='/'>
        
          <img className="logo" src={logo} alt="Logo" />
        
        </Link>
        <div className={`nav-links ${isNavOpen ? 'show-nav' : 'hide-nav'}`}>
          <ScrollLink to="gradiant" smooth={true} duration={800} onClick={() => scrollToSection("gradiant")}>
            <Link to='/'>
            About
            </Link>
          </ScrollLink>
          <Link to='/esummit'>
          <button className="button bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            E-summit
          </button>
          </Link>
          <ScrollLink to="events" smooth={true} duration={800} onClick={() => scrollToSection("events")}>
          <Link to='/'>
            Events
            </Link>
          </ScrollLink>
          <ScrollLink to="gallery-container" smooth={true} duration={800} onClick={() => scrollToSection("gallery-container")}>
          <Link to='/'>
            Gallery
            </Link>
          </ScrollLink>
          <Link to="/contact">
            Contact Us
          </Link>
          <ScrollLink to="team-container" smooth={true} duration={800} onClick={() => scrollToSection("team-container")}>
          <Link to='/'>
            Our Team
            </Link>
          </ScrollLink>
        </div>
        <div className={`nav-icon`} onClick={handleNavClick}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isNavOpen && <div className="overlay" onClick={closeNav}></div>}
      </nav>
      {showESummit && <ESummit />}
    </header>
  );
};

export default Navbar;
