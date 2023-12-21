import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.js';
import ESummit from './components/ESummit/ESummit.js';
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import Preloader from './components/preloader/Preloader.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Contact from './components/Contact/Contact.jsx';
import Event from './components/Events.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer.jsx';
import {motion} from "framer-motion";
import Preloader2 from './components/preloader2/Preloader2.jsx';
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Route,
  Routes, useNavigate ,
} from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function App() {
  const [loader, setLoader] = useState(true);

  const [showPreloader, setShowPreloader] = useState(false);
  const [mountainMoved, setMountainMoved] = useState(false);
  const [showESummit, setShowESummit] = useState(false);
  const [hideOtherSections, setHideOtherSections] = useState(true);




  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
      setMountainMoved(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleESummitClick = () => {
    setShowESummit(true);
    setHideOtherSections(false);
  };
  useEffect(() => {
    if (loader) {
      document.body.classList.add('preloader-active');
    } else {
      document.body.classList.remove('preloader-active');
    }
  }, [loader]);



  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 1.2,
          },
          repulse: {
            distance: 200,
            duration: 0.6,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 3,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.9,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 30,
          max: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
    {loader ? (
      <Preloader />
    ) : (
      <Router>
       
        <Toaster />

        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Profile />} /> */}
          <Route path="/" element={<div id='home'><Landingpage />
            <AboutUs /> <Event /> <Gallery /> <Footer /><Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      /></div>} />
     
      
        <Route path="/esummit" element={<ESummit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
          {/* <Route exact path="/Admin/ViewEvents" element={<ViewEvents />} />  */}
        </Routes>
        
      </Router>
    )}
  </>
  );
}

export default App;
