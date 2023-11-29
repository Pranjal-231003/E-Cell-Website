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
          <button className="button bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-red-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  E-summit
</button>
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
