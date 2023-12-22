import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';
// import Varun from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM (1).jpeg';
// import Yash from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM.jpeg';
// import Bansal from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.33 PM.jpeg';
// import Shourya from '../assets/Team/IMG_5265 (1).jpg';
// import Harsh from '../assets/Team/IMG_20231201_150801.jpg';
// import Jay from '../assets/Team/1701188174968.jpg';
// import Ayush from '../assets/Team/IMG_3842.jpg';
// import Pranjal from '../assets/Team/WhatsApp Image 2023-11-30 at 7.50.26 PM.jpeg';
// import Aditya from '../assets/Team/aditya.jpeg';
// import Mitali from '../assets/Team/IMG-20230909-WA0082~2.jpg';
// import AdityaN from '../assets/Team/m2.jpeg';
// import { FaLinkedin } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const teamMembers = [
  { id: 1, name: 'Varun Ashok', title: 'Coordinator', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008270/WhatsApp_Image_2023-11-28_at_10.17.34_PM_1_cbfsig.jpg',gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' },
  { id: 1, name: 'Yash Gautam', title: 'Coordinator', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008272/WhatsApp_Image_2023-11-28_at_10.17.34_PM_uuxjz9.jpg',gmail: '21ucs235@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/yash-gautam-108555229/'},
  { id: 1, name: 'Harsh Bansal', title: 'Coordinator', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008270/WhatsApp_Image_2023-11-28_at_10.17.33_PM_q0ilkd.jpg' ,gmail: '21ucc044@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/harsh-bansal-565351224/'   },
  { id: 2, name: 'Pranjal Jain', title: 'Mentor', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008268/picofme_aielvq.jpg',gmail: 'pranjalshp2310@gmail.com',linkedin:'https://www.linkedin.com/in/pranjal-jain-a42689237/'  },
  { id: 2, name: 'Aditya Narang', title: 'Mentor', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008270/m2_arqzua.jpg',gmail: '21ucs010@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/aditya-n-045977253/'  },
  { id: 3, name: 'Shourya Gupta', title: 'UI/UX Designer and Developer', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008258/IMG_5265_1_khjh67.jpg',gmail: 'shourya010604@gmail.com', linkedin:'https://www.linkedin.com/in/shourya-gupta-3aa5411a1/'  },
  { id: 4, name: 'Kumar Harsh', title: 'Fullstack Developer', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008260/IMG_20231201_150801_wblszc.jpg',gmail: 'kumarharsh0205@gmail.com', linkedin:'https://www.linkedin.com/in/kumarharsh-p/'  },
  { id: 5, name: 'Aditya Kumar', title: 'Fullstack Developer', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008254/aditya_prqcbm.jpg',gmail: 'adityakumar290304@gmail.com',linkedin: 'www.linkedin.com/in/aditya-kumar007'  },
  { id: 6, name: 'Jay Aggarwal', title: 'Frontend Developer', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008253/1701188174968_i85fwk.jpg',gmail: '22ucs094@lnmiit.ac.in', linkedin:'https://in.linkedin.com/in/jay-aggarwal-65b058233'  },
  { id: 7, name: 'Ayush Bansal', title: 'Frontend Developer', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008257/IMG_3842_pjw4zg.jpg',gmail: '22ucs042@lnmiit.ac.in', linkedin:'https://www.linkedin.com/in/bansalayush247/'  },
  { id: 8, name: 'Mitali Manya', title: 'Frontend Developer', photo: 'https://res.cloudinary.com/dqcrzyxnt/image/upload/q_auto/v1703008263/IMG-20230909-WA0082_2_b3jyyq.jpg',gmail: '22uec081@lnmiit.ac.in', linkedin:'https://www.linkedin.com/in/mitali-manya-796921251/' },
 

];

const Team = () => {
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

  const group1 = teamMembers.filter(member => member.id >= 3 && member.id <= 5);
  const group2 = teamMembers.filter(member => member.id >= 6 && member.id <= 8);
 
  return (
    
    <div className="team-container" id='team'>
      
      <h1>OUR <span  className="text-team">COORDINATORS.</span></h1>
      <div className="team-row">
        {teamMembers.slice(0, 3).map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
      {/* <div className="our-team"> */}
   <div className="our-team"><h1>OUR <span className="text-team">TEAM.</span></h1></div>
      
      <div className="team-row">
      {teamMembers.slice(3, 5).map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
      {/* <div className="team-details1">
      {teamMembers.slice(4, 5).map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div> */}
      <div className="team-row">
          {group1.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
        <div className="team-row">
          {group2.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
          </div>
          <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
    // </div>
  );
};
export default Team;
