import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';
import Varun from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM (1).jpeg';
import Yash from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM.jpeg';
import Bansal from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.33 PM.jpeg';
import Shourya from '../assets/Team/IMG_5265 (1).jpg';
import Harsh from '../assets/Team/IMG_20231201_150801.jpg';
import Jay from '../assets/Team/1701188174968.jpg';
import Ayush from '../assets/Team/IMG_3842.jpg';
import Pranjal from '../assets/Team/WhatsApp Image 2023-11-30 at 7.50.26 PM.jpeg';
import Aditya from '../assets/Team/aditya.jpeg';
import Mitali from '../assets/Team/IMG-20230909-WA0082~2.jpg';
import AdityaN from '../assets/Team/m2.jpeg';
// import { FaLinkedin } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

const teamMembers = [
  { id: 1, name: 'Varun Ashok', title: 'Coordinator', photo: Varun,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' },
  { id: 1, name: 'Yash Gautam', title: 'Coordinator', photo: Yash,gmail: '21ucs235@lnmiit.ac.in',linkedin:'yash-gautam-108555229/'},
  { id: 1, name: 'Harsh Bansal', title: 'Coordinator', photo: Bansal ,gmail: '21ucc044@lnmiit.ac.in'  },
  { id: 2, name: 'Pranjal Jain', title: 'Mentor', photo: Pranjal,gmail: 'pranjalshp2310@gmail.com'  },
  { id: 2, name: 'Aditya Narang', title: 'Mentor', photo: AdityaN,gmail: '21ucs010@lnmiit.ac.in'  },
  { id: 3, name: 'Shourya Gupta', title: 'UI/UX Designer and Developer', photo: Shourya,gmail: 'shourya010604@gmail.com'  },
  { id: 4, name: 'Kumar Harsh', title: 'Fullstack Developer', photo: Harsh,gmail: 'kumarharsh0205@gmail.com'  },
  { id: 5, name: 'Aditya Kumar', title: 'Fullstack Developer', photo: Aditya,gmail: 'adityakumar290304@gmail.com',linkedin: 'www.linkedin.com/in/aditya-kumar007'  },
  { id: 6, name: 'Jay Aggarwal', title: 'Frontend Developer', photo: Jay,gmail: '22ucs094@lnmiit.ac.in'  },
  { id: 7, name: 'Ayush Bansal', title: 'Frontend Developer', photo: Ayush,gmail: '22ucs042@lnmiit.ac.in'  },
  { id: 8, name: 'Mitali Manya', title: 'Frontend Developer', photo: Mitali,gmail: '22uec081@lnmiit.ac.in' },
 

];

const Team = () => {

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
    </div>
    // </div>
  );
};
export default Team;
