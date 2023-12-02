import React, { useState } from 'react';
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
        <ScrollLink to="/">
          <img className="logo" src={logo} alt="Logo" />
        </ScrollLink>
        <div className={`nav-links ${isNavOpen ? 'show-nav' : 'hide-nav'}`}>
          <ScrollLink to="gradiant" smooth={true} duration={800} onClick={() => scrollToSection("gradiant")}>
            About
          </ScrollLink>
          <button className="button bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" onClick={openESummit}>
            E-summit
          </button>
          <ScrollLink to="events" smooth={true} duration={800} onClick={() => scrollToSection("events")}>
            Events
          </ScrollLink>
          <ScrollLink to="gallery-container" smooth={true} duration={800} onClick={() => scrollToSection("gallery-container")}>
            Gallery
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={800} onClick={() => scrollToSection("contact")}>
            Contact Us
          </ScrollLink>
          <ScrollLink to="team-container" smooth={true} duration={800} onClick={() => scrollToSection("team-container")}>
            Our Team
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
