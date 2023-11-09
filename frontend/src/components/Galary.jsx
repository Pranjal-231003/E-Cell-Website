import React, { useState, useEffect } from 'react';
import './assets/css/Galary.css';
import img1 from './assets/image/imge (1).jpg';
import img2 from './assets/image/imge (2).jpg';
import img3 from './assets/image/imge (3).jpg';
import img4 from './assets/image/imge (4).jpg';
import img5 from './assets/image/imge (5).jpg';
import img6 from './assets/image/imge (6).jpg';

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="gallery_contain">
      <h1>Gallery</h1>
      <div className="carousel">
        <div className="image-contain" id="imgs">
        {images.map((src, index) => (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      key={index}
      src={src}
      alt={`Image ${index + 1}`}
      style={{ display: index === currentIndex ? 'block' : 'none' }}
    />
  ))}
        </div>
        <div className="buttons-contain">
          <button id="left" onClick={goToPrevious}>Prev</button>
          <button id="right" onClick={goToNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
