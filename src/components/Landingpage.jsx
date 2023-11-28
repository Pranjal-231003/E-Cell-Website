import React, { useState, useEffect } from 'react';
import './assets/css/Landingpage.css';
import image from './assets/image/image 5.png';

function Landingpage({ mountUp }) {
  return (
    <>
      <div className={`Ecell_container ${mountUp ? 'moved-up' : ''}`}>
        <div className="name_wrapper">
          <h1 className="club_name">ENTREPRENEURSHIP</h1>
          <h1 className="stroke">ENTREPRENEURSHIP</h1>
        </div>
        <h1 className="cell">CELL</h1>
        <img src={image} alt="" srcSet="" />
        
      </div>
    </>
  );
}

export default Landingpage;
