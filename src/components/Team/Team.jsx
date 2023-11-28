import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';
import img1 from '../assets/Team/logo512.png'
import Varun from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM (1).jpeg';
import Yash from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.34 PM.jpeg';
import Bansal from '../assets/Team/WhatsApp Image 2023-11-28 at 10.17.33 PM.jpeg';

const teamMembers = [
  { id: 1, name: 'Varun Ashok', title: 'Coordinator', photo: Varun },
  { id: 1, name: 'Yash Gautam', title: 'Coordinator', photo: Yash },
  { id: 1, name: 'Harsh Bansal', title: 'Coordinator', photo: Bansal },
  { id: 2, name: 'D', title: 'Web Developer', photo: img1 },
  { id: 3, name: 'E', title: 'Web Developer', photo: img1 },
  { id: 4, name: 'F', title: 'Web Developer', photo: img1 },
  { id: 5, name: 'G', title: 'Web Developer', photo: img1 },
  { id: 6, name: 'H', title: 'Web Developer', photo: img1 },
  { id: 7, name: 'I', title: 'Web Developer', photo: img1 },
  { id: 8, name: 'J', title: 'Web Developer', photo: img1 },
  { id: 9, name: 'K', title: 'Web Developer', photo: img1 },


];

const Team = () => {

  const group1 = teamMembers.filter(member => member.id >= 2 && member.id <= 5);
  const group2 = teamMembers.filter(member => member.id >= 6 && member.id <= 9);

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
