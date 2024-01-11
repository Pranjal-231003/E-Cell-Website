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
    setIsNavOpen(false);
    setShowESummit(true);
  };
 
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth', smooth:'easeInOutQuart' });
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
        <Link to='/'  onClick={handleScrollToTop}>
        
          <img className="logo" src={logo} alt="Logo" />
        
        </Link>
        <div className={`nav-links ${isNavOpen ? 'show-nav' : 'hide-nav'}`}>
          <ScrollLink to="gradiant" smooth={true} duration={800} onClick={() => scrollToSection("gradiant")}>
            <Link to='/' className='link' onClick={handleNavClick}>
            About
            </Link>
          </ScrollLink>
          <Link to="https://www.esummitlnmiit.live/" target="_blank" className='link' onClick={handleNavClick}>
          <button className="overflow-hidden relative hover:brightness-150 active:opacity-75 duration-300 link btn">
            E-summit
          </button>
          </Link>
          <ScrollLink to="events" smooth={true} duration={800} onClick={() => scrollToSection("events")}>
          <Link to='/' className='link' onClick={handleNavClick}>
            Events
            </Link>
          </ScrollLink>
          <ScrollLink to="gallery-container" smooth={true} duration={800} onClick={() => scrollToSection("gallery-container")}>
          <Link to='/' className='link' onClick={handleNavClick}>
            Gallery
            </Link>
          </ScrollLink>
          <ScrollLink>
          <Link to="/contact" className='link' onClick={handleNavClick}>
            Contact Us
          </Link>
          </ScrollLink>
          <ScrollLink>
          <Link to='/team' className='link' onClick={handleNavClick}>
            Our Team
            </Link>
          </ScrollLink>
         
        </div>
        </nav>
        <div className={`nav-icon`} onClick={handleNavClick}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isNavOpen && <div onClick={closeNav}></div>}
     
      {showESummit && <ESummit />}
    </header>
  );
};

export default Navbar;