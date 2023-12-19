import React, { useState } from 'react';
import Slider from 'react-slick';
import './Gallery.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import man_with_tv from '../assets/image/ecellgallery 1.png';


const Gallery = () => {
  // Array of images to be displayed in the carousel
  const images = ['https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006010/ecell/11_gia6u6.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006009/ecell/10_dyrb2l.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006008/ecell/9_jiqtzi.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006008/ecell/8_unwopm.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006007/ecell/6_woagkn.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006007/ecell/7_futeuc.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006007/ecell/4_neo2bz.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006006/ecell/5_d658ct.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006006/ecell/3_gl6ka0.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006006/ecell/2_k8oklo.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/v1703006006/ecell/1_bspcj1.png'];

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
