import React from 'react';
import ContactCss from './Contact.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// import firebase from 'firebase/app';
// import 'firebase/auth';

const Contact = () => {
  // const signInWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider);
  // };
  return (
    <div className={ContactCss.main}>
        <div className={ContactCss.box}>
            <h1 className={ContactCss.get}>GET IN <span className={ContactCss.touch}>TOUCH.</span></h1>

            <div className={ContactCss.name}>
                <div className={ContactCss.inputContainer2}> <input type="text" placeholder="First name" className={ContactCss.first} /><BsFillPersonFill className={ContactCss.logo1} /></div>
                <div className={ContactCss.inputContainer2}> <input type="text" placeholder="Last name" className={ContactCss.first} /><BsFillPersonFill className={ContactCss.logo1} /></div>
            </div>

            <div className={ContactCss.inputContainer1}><input type="text" placeholder="Email" className={ContactCss.email} /><BiLogoGmail className={ContactCss.logo2} /></div>
            <button type="submit" className={ContactCss.submit}>Submit</button>
          {/* <button onClick={signInWithGoogle}>Sign In with Google</button> */}
          
          <div className={ContactCss.social}>
            <a href={"https://www.instagram.com/ecell.lnmiit"} target="_blank" rel="noopener noreferrer"><FaInstagram className={ContactCss.insta}/></a>
            <a href={"https://twitter.com/ecell_lnmiit"} target="_blank" rel="noopener noreferrer"><FaXTwitter className={ContactCss.insta}/></a>
            <a href={"https://www.linkedin.com/company/entrepreneurship-cell-the-lnmiit/"} target="_blank" rel="noopener noreferrer"><FaLinkedinIn className={ContactCss.insta}/></a>
          </div>
        </div>
    </div>
  )
}

export default Contact