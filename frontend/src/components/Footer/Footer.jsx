import React from 'react'
import "./footer.css"
import logo from  "../assets/image/logo.svg"
function Footer() {
  return (
   <>
   <div className="footer_container">
    <div className="line ds"></div>
    <div className="footer_content">
        <div className="group314">
            <h2>
                QUICK LINKS
            </h2>
            <h4>About</h4>
            <h4>Contact us</h4>
            <h4>RoadMap</h4>
            <h4>FAQ</h4>

        </div>
        <div className="logo_footer">
            <div>
                <img src={logo} alt="ecell" srcset="" />
                <h1>ECELL</h1>
            </div>
            <div className="line"></div>
            <div className="eclipse_de">
                <div className="eclipse"></div>
                <div className="eclipse"></div>
                <div className="eclipse"></div>
           </div>
        </div>
        <div className="address">
            <p>The LNM Institute of Information Technology Jaipur ,Rajasthan (302031)</p>
        
        </div>
    </div>
    <div className="line"></div>
   </div>
   </>
  )
}

export default Footer