import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import "./AboutStyles.css";
import FOODIMG from "../../assets/img6.png";
const About = () => {
  return (
    <div id='about'>
      <SectionHeader>about</SectionHeader>
      <div className='about-container'>
        <img alt='most liked food' src={FOODIMG} />
        <div className='food-description-about'>
          <h3>Food Is An Important Part Of A Balanced Diet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p>
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
