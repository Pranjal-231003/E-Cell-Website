import React, { useEffect, useState } from 'react';
import './App1.css';
// import st from './assets/image/stank.jpeg';
// import yp from './assets/image/yp.jpeg';
// import dm from './assets/image/dm.png';
// import sw from './assets/image/sweek.png';
// import ig from './assets/image/Untitled.png';
// import swe from './assets/image/swe.jpeg';
// import di from './assets/image/di.jpeg';
// import dms from './assets/image/dms.png';
import './AboutUs/AboutUs.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


function Events() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Update state based on window width
      setIsSmallDevice(window.innerWidth <= 600); // Adjust the breakpoint as needed
    };

    // Initial call to set initial state
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
          <div className="item-s" style={{ backgroundImage: `url(${isSmallDevice ? 'https://res.cloudinary.com/dmvphfrdo/image/upload/v1703050697/startup_weekend_ipya57.png' : 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006023/ecell/sweek_uk5lvc.png'})`}}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${isSmallDevice ? 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703009306/yp_dmu0qe.png' : 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006022/ecell/yp_m8u68x.jpg'})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage:`url(${isSmallDevice ? 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703009309/IGNITE_ga1d0b.png' : 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006021/ecell/Untitled_zwaglk.png'})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}> </div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${isSmallDevice ? 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006014/ecell/dms_rn6rxp.png' : 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006018/ecell/dm_yn4xnd.png'})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}> </div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${isSmallDevice ? 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703009306/Disrupt_eo3wov.png' : 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006011/ecell/di_aoqudk.jpg'})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${isSmallDevice ? 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703009305/St_pca3i1.png' : 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006020/ecell/stank_bkjtcb.jpg'})` }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}></div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}></div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: `url(${isSmallDevice ? 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703009862/swe_uqixht.png' : 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703006019/ecell/swe_qxyb3s.jpg'})` }}>
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
