import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import './Gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Animation.css'; // Import the animations CSS file
import man_with_tv from '../assets/image/ecellgallery 1.png';
import galleryGif from '../assets/gallery-animation.gif';

const Gallery = () => {
  // Array of images to be displayed in the carousel
  const images = ['https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006010/ecell/11_gia6u6.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006009/ecell/10_dyrb2l.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006008/ecell/9_jiqtzi.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006008/ecell/8_unwopm.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006007/ecell/6_woagkn.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006007/ecell/7_futeuc.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006007/ecell/4_neo2bz.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006006/ecell/5_d658ct.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006006/ecell/3_gl6ka0.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006006/ecell/2_k8oklo.png', 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006006/ecell/1_bspcj1.png'];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.querySelector('.gly');

      if (gallery) {
        const galleryRect = gallery.getBoundingClientRect();

        if (
          galleryRect.top >= 0 &&
          galleryRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setShowGif(true);

          const gifTimeout = setTimeout(() => {
            setShowGif(false);
          }, 9000);

          return () => clearTimeout(gifTimeout);
        } else {
          // Pause or hide the GIF when the tv-container is not in the window
          setShowGif(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setSelectedImage(images[index]);
      // Add the animate_content class to trigger the animation
      document.querySelector('.image-display img').classList.add('animate_content');
      // Remove the animate_content class after the animation duration (3000ms)
      setTimeout(() => {
        document.querySelector('.image-display img').classList.remove('animate_content');
      }, 2000);
    },
  };

  return (
    <div className="gallery-container">
      <div className="gly">
        <h1>GALLERY</h1>
      </div>
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
          {/* Show the GIF when showGif state is true */}
          <img
            src={selectedImage}
            alt="Image on TV"
            className="animate_content" // Initial animation when component mounts
          />

        </div>
        {showGif && <img src={galleryGif} alt="Gallery Animation GIF" className="gif" />}

      </div>
    </div>
  );
};

export default Gallery;