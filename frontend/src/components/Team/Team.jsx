import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';
import Varun from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM (1).jpeg';
import Yash from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM.jpeg';
import Bansal from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.33 PM.jpeg';
import Shourya from '../assets/Team/IMG_5265.jpg';
import Harsh from '../assets/Team/IMG-20230822-WA0103.jpg';
import Jay from '../assets/Team/1701188174968.jpg';
// import Pranjal from '../assets/Team/picofme.jpg'
import Mitali from '../assets/Team/IMG-20230909-WA0082~2.jpg';

const teamMembers = [
  { id: 1, name: 'Varun Ashok', title: 'Coordinator', photo: Varun },
  { id: 1, name: 'Yash Gautam', title: 'Coordinator', photo: Yash },
  { id: 1, name: 'Harsh Bansal', title: 'Coordinator', photo: Bansal },
  // { id: 2, name: 'Pranjal Jain', title: 'Web Developer', photo: Pranjal },   
  { id: 3, name: 'Kumar Harsh', title: 'Web Developer', photo: Harsh },
  { id: 4, name: 'Shourya Gupta', title: 'UI/UX Designer', photo: Shourya },
  { id: 5, name: 'Hugesh Kumar', title: 'Web Developer', photo: Varun },
  { id: 6, name: 'Jay Aggarwal', title: 'Web Developer', photo: Jay },
  { id: 7, name: 'Ayush Bansal', title: 'Web Developer', photo: Varun },
  { id: 8, name: 'Mitali Manya', title: 'Web Developer', photo: Mitali},
 


];

const Team = () => {

  const group1 = teamMembers.filter(member => member.id >= 3 && member.id <= 5);
  const group2 = teamMembers.filter(member => member.id >= 6 && member.id <= 8);

  return (
    <div className="team-container">
      <h1>OUR <span  className="text-team">COORDINATORS.</span></h1>
      <div className="team-row">
        {teamMembers.slice(0, 3).map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
      <div className="our-team">
      <h1>OUR <span className="text-team">TEAM.</span></h1>
      <div className="team-details1">
      {teamMembers.slice(3, 4).map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
      <div className="team-details">
          {group1.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
        <div className="team-details">
          {group2.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
          </div>
    </div>
    </div>
  );
};
export default Team;
