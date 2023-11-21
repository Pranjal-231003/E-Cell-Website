import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    let slideIndex = 0;
    const slide = document.getElementById('slide');
    const lists = slide.querySelectorAll('.item-s');

    function showSlide() {
      slideIndex++;
      if (slideIndex >= lists.length) {
        slideIndex = 0;
      }
      slide.appendChild(lists[slideIndex]);
    }

    // Automatic slide change
    const interval = setInterval(showSlide, 8000); // Change slide every 8 seconds

    // Clicking item-s
    for (let i = 0; i < lists.length; i++) {
      lists[i].onclick = function () {
        slideIndex = i;
        slide.appendChild(lists[slideIndex]);
      };
    }

    document.getElementById('next').onclick = function () {
      let lists = document.querySelectorAll('.item-s');
      document.getElementById('slide').appendChild(lists[0]);
    };

    document.getElementById('prev').onclick = function () {
      let lists = document.querySelectorAll('.item-s');
      document.getElementById('slide').prepend(lists[lists.length - 1]);
    };

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container2">
        <h2 style={{ fontSize: '400%', fontWeight: 'normal' }}>WHAT WE PROVIDE</h2>
        <div id="slide">
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Content\ Management.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>SHARK TANK 1</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>WE OVERSEE YOUR SOCIAL MEDIA CONTENT DISTRIBUTION, WITH OPTIMAL CAPTIONS AND ENGAGEMENT COMPONENTS THAT AMPLIFY YOUR VISIBILITY AND ENGAGEMENT.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Ideation\ and\ Consulting.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>IDEATION &amp; CONSULTING 2</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>WE OVERSEE YOUR SOCIAL MEDIA CONTENT DISTRIBUTION, WITH OPTIMAL CAPTIONS AND ENGAGEMENT COMPONENTS THAT AMPLIFY YOUR VISIBILITY AND ENGAGEMENT.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Influencer\ Marketing.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>INFLUENCER MARKETING 3</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>WE OVERSEE YOUR SOCIAL MEDIA CONTENT DISTRIBUTION, WITH OPTIMAL CAPTIONS AND ENGAGEMENT COMPONENTS THAT AMPLIFY YOUR VISIBILITY AND ENGAGEMENT.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>STUNNING VISUALS 4</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>WE OVERSEE YOUR SOCIAL MEDIA CONTENT DISTRIBUTION, WITH OPTIMAL CAPTIONS AND ENGAGEMENT COMPONENTS THAT AMPLIFY YOUR VISIBILITY AND ENGAGEMENT.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>STUNNING VISUALS 5</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>WE OVERSEE YOUR SOCIAL MEDIA CONTENT DISTRIBUTION, WITH OPTIMAL CAPTIONS AND ENGAGEMENT COMPONENTS THAT AMPLIFY YOUR VISIBILITY AND ENGAGEMENT.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>STUNNING VISUALS 6</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>WE OVERSEE YOUR SOCIAL MEDIA CONTENT DISTRIBUTION, WITH OPTIMAL CAPTIONS AND ENGAGEMENT COMPONENTS THAT AMPLIFY YOUR VISIBILITY AND ENGAGEMENT.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>STUNNING VISUALS 7</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>WE OVERSEE YOUR SOCIAL MEDIA CONTENT DISTRIBUTION, WITH OPTIMAL CAPTIONS AND ENGAGEMENT COMPONENTS THAT AMPLIFY YOUR VISIBILITY AND ENGAGEMENT.</div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev"><i className="fa-solid fa-angle-left" /></button>
          <button id="next"><i className="fa-solid fa-angle-right" /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
