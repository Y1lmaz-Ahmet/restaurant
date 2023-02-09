import "./ContactStyles.css";
import React from "react";
import SectionHeader from "../section-header/SectionHeader";

const Contact = () => {
  return (
    <div id='contact'>
      <SectionHeader>Contact</SectionHeader>
      <div className='contact-container'>
        <h2>
          Have Question In Mind? <span>Let Us Help You</span>
        </h2>
        <div className='contact-inputbox'>
          <input type='text' placeholder='yourmail@gmail.com' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
