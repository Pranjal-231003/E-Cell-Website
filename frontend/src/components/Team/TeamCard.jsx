import React, { useState, useEffect } from 'react';
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, title, photo, gmail, linkedin }) => {

  
  const [gmailClicked, setGmailClicked] = useState(false);
  const [linkedinClicked, setLinkedinClicked] = useState(false);

  useEffect(() => {
    if (gmailClicked) {
      window.location.href = `mailto:${gmail}`;
      setGmailClicked(false); // Reset the state
    }
  }, [gmailClicked, gmail]);

  const openLinkedInProfile = () => {
    if (!linkedinClicked) {
      const url = `${linkedin}`;
      window.open(url, '_blank');
      setLinkedinClicked(true); // Reset the state
    }
  };
  

  return (
    <div className="team-card">
      <img src={photo} alt={name} className="team-photo" />
      <div className="team-icons">
      <div className="gmail" onClick={() => setGmailClicked(true)}>
      <SiGmail style={{ fontSize: "1.3em" }} />
      </div>
      <div className="linkedin" onClick={openLinkedInProfile}>
     
      <FaLinkedin style={{ fontSize: "1.3em"}}/>
      </div>
      </div>
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-title">{title}</p>
      </div>  
    </div>
  );
};

export default TeamCard;
