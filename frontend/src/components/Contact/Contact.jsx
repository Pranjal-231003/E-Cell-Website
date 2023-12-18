import React, { useEffect, useState } from 'react';
import ContactCss from './Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_nn9qz2e', // Replace with your Email.js Service ID
        'template_zl25cn9', // Replace with your Email.js Template ID
        {
          to_name: 'ECELL Tech Team', // Replace with the recipient's name
          from_name: 'ECELL', // Replace with the sender's name
          user_name: formData.firstName + ' ' + formData.lastName, // Combine first and last names
          user_email: formData.email, // Use the user's email
        },
        'osyfFvTQprBPaBTx3' // Replace with your Email.js User ID
      );
      setShowSuccessPopup(true);
      console.log('Email sent successfully');
      // Add any additional logic or UI updates as needed
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error, show error message, etc.
    }
  };
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };
  useEffect(() => {
    if (showSuccessPopup) {
      const timerId = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 2000);

      // Clear the timer when the component unmounts or the popup is closed manually
      return () => clearTimeout(timerId);
    }
  }, [showSuccessPopup]);

  return (
    <div className={ContactCss.main} id='contact'>
      
      <div className={ContactCss.box}>
        <h1 className={ContactCss.get}>
          GET IN <span className={ContactCss.touch}>TOUCH.</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className={ContactCss.name}>
            <div className={ContactCss.inputContainer2}>
              <input
                type="text"
                placeholder="First name"
                className={ContactCss.first}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <BsFillPersonFill className={ContactCss.logo1} />
            </div>
            <div className={ContactCss.inputContainer2}>
              <input
                type="text"
                placeholder="Last name"
                className={ContactCss.first}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <BsFillPersonFill className={ContactCss.logo1} />
            </div>
          </div>

          <div className={ContactCss.inputContainer1}>
            <input
              type="text"
              placeholder="Email"
              className={ContactCss.email}
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              required
            />
            <BiLogoGmail className={ContactCss.logo2} />
          </div>

          <button type="submit" className={ContactCss.submit}>
            Submit
          </button>
        </form>
        {showSuccessPopup && (
          <div className={ContactCss.successPopup} onClick={closeSuccessPopup}>
            Mail sent successfully!
          </div>
        )}
        
      </div>
      
    </div>
  );
};

export default Contact;