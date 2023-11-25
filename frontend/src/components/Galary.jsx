import React, { useState, useEffect } from 'react';
import './assets/css/Galary.css';
import img1 from './assets/image/imge (1).jpg';
import img2 from './assets/image/imge (2).jpg';
import img3 from './assets/image/imge (3).jpg';
import img4 from './assets/image/imge (4).jpg';
import img5 from './assets/image/imge (5).jpg';
import img6 from './assets/image/imge (6).jpg';

function Gallery() {

  return (
    <div className="gallery_contain">
        <div className="grid_parent">
            <div className="grid">
                <div className="grid_height"></div>
            </div>
            <div className="grid">
                <div className="grid_height"></div>
            </div>
            <div className="grid">
                <div className="grid_height"></div>
            </div> 
            <div className="grid"></div>
        </div>
        <div className="text_parent">
            <div className="gallary_parent">
                <h2>Gallary</h2>
                <div className="view">view Gallary</div>
            </div>
        </div>
        <div className="grid_2">
            < div className='placement_1 g3'></div>
            < div className='placement_2 g4'></div>
            < div className='placement_3 g5'></div>
        </div>
   
    </div>
  );
}

export default Gallery;