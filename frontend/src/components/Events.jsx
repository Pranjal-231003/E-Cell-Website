import React, { useEffect } from 'react';
import './App1.css';
import st from './assets/image/stank.jpeg';
import yp from './assets/image/yp.jpeg';
import dm from './assets/image/dm.png';
import sw from './assets/image/sweek.png';
import ig from './assets/image/Untitled.png';
import swe from './assets/image/swe.jpeg';
import di from './assets/image/di.jpeg';
import './AboutUs/AboutUs.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


function Events() {
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
    <div id='events'>
      <div className="evh"><h1>EVENTS</h1></div>
      <div className="container2">
        <h2 className='eveh' style={{ fontSize: '400%', fontWeight: 'normal' }}></h2>
        <div id="slide">
          <div className="item-s" style={{ backgroundImage: `url(${di})`}}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${yp})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${st})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}> </div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${swe})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}> </div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${ig})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${dm})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${sw})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev"><FaAngleLeft /></button>
          <button id="next"><FaAngleRight /></button>
        </div>
      </div>
    </div>
  );
}

export default Events;
