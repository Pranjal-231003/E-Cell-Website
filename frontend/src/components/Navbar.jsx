import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from "./assets/image/logo.svg";
import { FaBars, FaTimes } from 'react-icons/fa';
import './assets/css/Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    closeNav();
  };

  return (
    <header>
      <nav className="navbar">
      <ScrollLink to="/">
          <img className="logo" src={logo} alt="Logo" />
        </ScrollLink>
        <div className={`nav-links ${isNavOpen ? 'show-nav' : 'hide-nav'}`}>
          <ScrollLink to="about" smooth={true} duration={800} onClick={() => scrollToSection("about")}>
            About
          </ScrollLink>
          <ScrollLink to="e-summit" smooth={true} duration={800} onClick={() => scrollToSection("e-summit")}>
            E-Summit
          </ScrollLink>
          <ScrollLink to="events" smooth={true} duration={800} onClick={() => scrollToSection("events")}>
            Events
          </ScrollLink>
          <ScrollLink to="gallery" smooth={true} duration={800} onClick={() => scrollToSection("gallery")}>
            Gallery
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={800} onClick={() => scrollToSection("contact")}>
            Contact Us
          </ScrollLink>
        </div>
        <div className={`nav-icon`} onClick={handleNavClick}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isNavOpen && <div className="overlay" onClick={closeNav}></div>}
      </nav>
    </header>
  );
};

export default Navbar;
