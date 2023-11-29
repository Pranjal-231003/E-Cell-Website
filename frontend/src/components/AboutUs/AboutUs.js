import React from 'react'
import './AboutUs.css';
import ecell from'./pngwing 2.png';
import gradiant from '../assets/AboutUs/Ellipse 1.png';
import rect3 from '../assets/AboutUs/Rectangle 3.png';
import rect4 from '../assets/AboutUs/Rectangle 4.png';
import rectdown from '../assets/AboutUs/Rectangle 5.png';
import ellipse2 from '../assets/AboutUs/Ellipse 2.png';
import line2 from '../assets/AboutUs/Group 2.png';


const AboutUs = () => {
  return (
    <>
      <div className='AboutUs'>
       
        <div className='images'>
        <img className='gradiant' src={gradiant} alt='gradiant'></img>
        <img className='rect3' src={rect3} alt='rect3'></img>
        <img className='rect4' src={rect4} alt='rect4'></img>
        <img className='rect5' src={rect4} alt='rect5'></img>
        <img className='rectdown' src={rectdown} alt='rectdown'></img>
        <img className='ell2' src={ellipse2} alt='ell2'></img>
        <img className='line2' src={line2} alt='line2'></img>
       

        </div>
        


        <div className='heading'>WHO WE <span style={{color: "#00FEDF"}}>ARE.</span></div>
        
        <div className='container'>
            <div className='img'>
                <img className='image'  src={ecell} alt="ecell" />
                
            </div>
            <div className='text'>
                <p>LNMIIT's Entrepreneurship Cell (E-cell) is a dynamic hub dedicated to fostering innovation and the entrepreneurial spirit among our students. Our mission is to provide a comprehensive platform for ideation, mentorship, and networking, equipping aspiring entrepreneurs for success.<br></br>
E-cell, serving as a catalyst for transforming ideas into impactful ventures, empowers students where innovation flourishes, and meaningful connections are forged. Through our multifaceted approach, we aim not only to support entrepreneurial endeavors but also to shape the future entrepreneurship landscape at LNMIIT—A community where ideas thrive and the entrepreneurial journey unfolds.
                </p>
            </div>
        </div>
        </div>
    </>
  )
}

export default AboutUs