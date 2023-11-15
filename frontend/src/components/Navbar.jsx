import { useState } from "react";
import logo from "./assets/image/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa";
import "./assets/css/Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="navbar">
      <img className="logo" src={logo} alt="" />
      <nav className={`nav-links ${isNavOpen ? "show-nav" : "hide-nav"}`}>
        <a href="/#">About</a>
        <a href="/#">E-Summit</a>
        <a href="/#">Events</a>
        <a href="/#">Gallery</a>
        <a href="/#">Contact Us</a>
      </nav>
      <div className="nav-icon" onClick={handleNavClick}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isNavOpen && (
        <div className="overlay" onClick={closeNav}></div>
      )}
    </header>
  );
};

export default Navbar;
