import React from 'react'
import "./footer.css"
import logo from  "../assets/image/logo.svg"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
function Footer() {
    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };
  return (
   <>
   <div className="footer_container">
    <div className="line ds"></div>
    <div className="footer_content">
        <div className="group314">
            <h2>
                QUICK LINKS
            </h2>
            <ScrollLink to="gradiant" smooth={true} duration={800} onClick={() => scrollToSection("gradiant")}>
            
            <h4 className="footer_about">About Us</h4>
            
          </ScrollLink>
          <Link to="/contact">
          <h4 className="footer_about">Contact us</h4>
          </Link>
            
            

        </div>
        <div className="logo_footer">
            <div>
                <img src={logo} alt="ecell" srcset="" />
                <h1>ECELL</h1>
            </div>
            <div className="line"></div>
            <div className="footer_social">
            <a href={"https://www.instagram.com/ecell.lnmiit"} target="_blank" rel="noopener noreferrer"><FaInstagram className="footer_insta"/></a>
            <a href={"https://twitter.com/ecell_lnmiit"} target="_blank" rel="noopener noreferrer"><FaXTwitter className="footer_insta"/></a>
            <a href={"https://www.linkedin.com/company/entrepreneurship-cell-the-lnmiit/"} target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="footer_insta"/></a>
          </div>
        </div>
        <div className="address">
            <p>The LNM Institute of Information Technology Jaipur ,Rajasthan (302031)</p>
        
        </div>
    </div>
    <div className="line"></div>
    <p className='policy'>© 2022 All Rights Reserved. Ecell®</p>
   </div>
   </>
  )
}

export default Footer