import React, { useEffect, useState } from 'react';
import './App.css';
import AboutUs from'./components/AboutUs/AboutUs.js'
import ESummit from './components/ESummit/ESummit.js';
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import Preloader from './components/preloader/Preloader.jsx'; // Import the Preloader component
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact/Contact.jsx';
import Event from './components/Events.jsx';
import Team from './components/Team/Team';
function App() {
  const [loader, setLoader] = useState(true); // Set loader to true initially
  const [mountainMoved, setMountainMoved] = useState(false); // Define mountainMoved state

  useEffect(() => {
    // Simulating image and component loading delay
    const timeout = setTimeout(() => {
      setLoader(false); // Set loader to false after the delay
      setMountainMoved(true); // Set mountainMoved to true after the delay
    }, 3000);

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);

  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Landingpage mountainMoved={mountainMoved} /> 
          <AboutUs />
          <ESummit />
          <Event/>
          <Gallery></Gallery>
          <Contact />
          <Team />
        </>
      )}
    </>
  );
}

export default App;
