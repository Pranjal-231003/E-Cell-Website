import React, { useEffect } from 'react';
import './App1.css';

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
      <div className="container2">
        <h2 style={{ fontSize: '400%', fontWeight: 'normal' }}>WHAT WE PROVIDE</h2>
        <div id="slide">
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Content\ Management.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>DISRUPT</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>Disrupt is a platform where the institute's budding entrepreneurs can pitch their startups to a panel of industry experts and potential investors. This platform offers comprehensive feedback and support, with the aim of enhancing their development and securing funding.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Ideation\ and\ Consulting.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>YELLOW PAGES</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>Yellow Pages is a contest where participants build products or services within a limited time frame and demonstrate their financial and marketing strategies. They have to prove to the judges that their product can generate revenue and attract customers.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Influencer\ Marketing.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '475%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>SHARK TANK</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>Shark Tank provided aspiring entrepreneurs with a distinctive opportunity to present their innovative ideas and skills to investors and venture capitalists. In response to their promising pitches, they secured seed funding exceeding 25 lakhs, marking a pivotal moment in their entrepreneurial journey.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>SELL WITH ECELL</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>Sell with Ecell -An exceptional opportunity to showcase your selling expertise and captivate customers enabling you to market your products and services according to your preferences and strategic planning.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>IGNITE</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>Ignite facilitates a dynamic platform wherein participants collaborate in real time to assemble groups and draw chits containing two words. Subsequently, participants construct a compelling pitch, which they then present before a discerning audience of angel investors(which are the members of E-CELL)</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>DEMYSTIFY</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>Demystify represents a case study competition that revolves around the meticulous examination of a chosen unicorn company by participating teams. In this endeavor, teams delve deep into various facets of the selected company, including the founder, their revenue-generating methodologies, and the intricate intricacies of their market strategies.</div>
            </div>
          </div>
          <div className="item-s" style={{ backgroundImage: 'url(assets/images/3pg/Video\ Editor.png)' }}>
            <div className="content">
              <div className="name" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '525%', lineHeight: '120%', fontWeight: 'normal', marginBottom: '12%' }}>STARTUP WEEKEND</div>
              <div className="des" style={{ fontFamily: '"Bebas Neue", sans-serif !important', fontSize: '135%', marginBottom: '-20%' }}>Startup Weekend, in collaboration with Google , unfolds over a 3-day duration.</div>
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

export default Events;
