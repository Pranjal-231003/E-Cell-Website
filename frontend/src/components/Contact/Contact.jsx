import React from 'react';
import ContactCss from './Contact.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
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

        </div>
    </div>
  )
}

export default Contact