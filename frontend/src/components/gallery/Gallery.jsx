import React, { useState } from 'react';
import Slider from 'react-slick';
import './Gallery.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import man_with_tv from '../assets/image/ecellgallery 1.png';
import img1 from '../assets/image/imge (1).jpg';
import img2 from '../assets/image/imge (2).jpg';
import img3 from '../assets/image/imge (3).jpg';
import img4 from '../assets/image/imge (4).jpg';
import img5 from '../assets/image/imge (5).jpg';
import img6 from '../assets/image/imge (6).jpg';
import img7 from '../assets/image/imge (7).jpg';
import img8 from '../assets/image/imge (8).jpg';
import img9 from '../assets/image/imge (9).jpg';
import img10 from '../assets/image/imge (10).jpg';
import img11 from '../assets/image/imge (11).jpg';


const Gallery = () => {
  // Array of images to be displayed in the carousel
  const images = [img1, img2, img3, img4, img5, img6];

  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    afterChange: (index) => {
      // Update the selected image when the carousel changes
      setSelectedImage(images[index]);
    },
  };

  return (
    <div className="gallery-container">
      <div className="tv-container">
        <img className="mantv" src={man_with_tv} alt="Man with TV" />
      
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Carousel Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
        <div className="image-display">
          <img src={selectedImage} alt="Image on TV" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
