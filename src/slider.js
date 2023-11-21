import React, { useRef } from 'react';
import './App.css'; // Import your CSS file

const Slideshow = ({ contentItems }) => {
  const slideRef = useRef(null);
  let currentSlide = 0;

  const handleNextClick = () => {
    currentSlide = (currentSlide + 1) % contentItems.length;
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  };

  const handlePrevClick = () => {
    currentSlide = (currentSlide - 1 + contentItems.length) % contentItems.length;
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  };

  // Automatic slide change
  const automaticSlideChange = () => {
    handleNextClick();
  };

  setInterval(automaticSlideChange, 8000); // Change slide every 8 seconds

  return (
    <div className="container2">
      <h2 style={{ fontSize: '400%', fontWeight: 'normal' }}>WHAT WE PROVIDE</h2>
      <div id="slide" ref={slideRef} className="slide-container">
        {contentItems.map((item, index) => (
          <div key={index} className="item-s" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
            <div className="content">
              <div className="name">{item.title}</div>
              <div className="des">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevClick}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNextClick}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
