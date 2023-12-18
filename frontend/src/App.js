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
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

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
  useEffect(() => {
    if (loader) {
      document.body.classList.add('preloader-active');
    } else {
      document.body.classList.remove('preloader-active');
    }
  }, [loader]);

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
            <AboutUs /> <Event /> <Gallery /> <Team /> <Footer /></div>} />

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
