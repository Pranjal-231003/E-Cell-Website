import React, { useState, useEffect } from 'react';
import './assets/css/Gallery.css';
// import img1 from './assets/image/imge (1).jpg';
// import img2 from './assets/image/imge (2).jpg';
// import img3 from './assets/image/imge (3).jpg';
// import img4 from './assets/image/imge (4).jpg';
// import img5 from './assets/image/imge (5).jpg';
// import img6 from './assets/image/imge (6).jpg';

function Gallery() {
    const [isGalleryClicked, setIsGalleryClicked] = useState(false);

    const handleonclick=()=>{
        
            setIsGalleryClicked(!isGalleryClicked);
       
    }
    // const g3Style = {
    //     transform: isGalleryClicked
    //       ? 'translate3d(0px, 20px, 0px) scale3d(1.2, 1.4, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
    //       : 'translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    //   };
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
            <div className="gallary_parent" onClick={handleonclick}>
                <h2>Gallery</h2>
                <div className="view">view Gallery</div>
            </div>
        </div>
        <div className="grid_2">
            < div className={`placement_3 g3 ${isGalleryClicked ? 'animated' : ''}`}></div>
            < div className={`placement_2 g4 ${isGalleryClicked ? 'animated' : ''}`}></div>
            < div className={`placement_3 g5 ${isGalleryClicked ? 'animated' : ''}`}></div>
            <div className={`placement_2 g6  ${isGalleryClicked ? 'animated' : ''}`}></div>
            <div className={`placement_2 g7 ${isGalleryClicked ? 'animated' : ''}`}></div>
            <div className={`placement_2 g11 ${isGalleryClicked ? 'animated' : ''}`}></div>
            <div className={`placement_2 g8 ${isGalleryClicked ? 'animated' : ''}`}></div>
            <div className={`placement_3 g9 ${isGalleryClicked ? 'animated' : ''}`}></div>
            <div className={`placement_1 g10 ${isGalleryClicked ? 'animated' : ''}`}></div>
            <div className={`placement_3 g12 ${isGalleryClicked ? 'animated' : ''}`}></div>

        </div>
   
    </div>
  );
}

export default Gallery;
