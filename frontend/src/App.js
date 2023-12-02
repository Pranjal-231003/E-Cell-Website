import React, { useEffect, useState } from 'react';
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

function App() {
  const [loader, setLoader] = useState(true);
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

  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <>
          <Navbar onESummitClick={handleESummitClick} />
          
            <>
              {hideOtherSections && <Landingpage mountainMoved={mountainMoved} />}
              {hideOtherSections && <AboutUs />}
              {hideOtherSections && <Event />}
              {hideOtherSections && <Gallery />}
              {hideOtherSections && <Team />}
              {hideOtherSections && <Contact />}
              {hideOtherSections && <Footer />}
            </>
          
          {showESummit && <ESummit />}
        </>
      )}
    </>
  );
}

export default App;
