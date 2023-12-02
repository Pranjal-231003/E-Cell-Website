import React from "react";
import TeamCard from "./TeamCard";

const SendTo = () => {
    const teamMembers = [
        { id: 1, name: 'Varun Ashok', title: 'Coordinator', photo: Varun,gmail: '22ucc056@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' },
        { id: 1, name: 'Yash Gautam', title: 'Coordinator', photo: Yash,gmail: '21ucs235@lnmiit.ac.in',linkedin:'https://www.linkedin.com/in/varun-andaluri-813160225/' },
        { id: 1, name: 'Harsh Bansal', title: 'Coordinator', photo: Bansal ,gmail: '21ucc044@lnmiit.ac.in' ,linkedin: 'https://www.linkedin.com/in/harsh-bansal-565351224/'},
        { id: 2, name: 'Pranjal Jain', title: 'Mentor', photo: Pranjal,gmail: 'pranjalshp2310@gmail.com'  },
        { id: 3, name: 'Shourya Gupta', title: 'UI/UX Designer and Developer', photo: Shourya,gmail: 'shourya010604@gmail.com'  },
        { id: 4, name: 'Kumar Harsh', title: 'Fullstack Developer', photo: Harsh,gmail: 'kumarharsh0205@gmail.com'  },
        { id: 5, name: 'Aditya Kumar', title: 'Fullstack Developer', photo: Aditya,gmail: '22ucc010@lnmiit.ac.in'  },
        { id: 6, name: 'Jay Aggarwal', title: 'Frontend Developer', photo: Jay,gmail: '22ucs094@lnmiit.ac.in'  },
        { id: 7, name: 'Ayush Bansal', title: 'Frontend Developer', photo: Ayush,gmail: '22ucs042@lnmiit.ac.in'  },
        { id: 8, name: 'Mitali Manya', title: 'Frontend Developer', photo: Mitali,gmail: '22uec081@lnmiit.ac.in' },
       
    
      ];


  return (
    <div>
      {teamMembers.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  );
};

export default SendTo;
