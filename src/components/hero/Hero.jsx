import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import "./HeroStyles.css";
import FOODIMG from "../../assets/img1.png";
const Hero = () => {
  return (
    <div id='hero'>
      <SectionHeader>Most liked food</SectionHeader>
      <div className='hero-container'>
        <img alt='most liked food' src={FOODIMG} />
        <div className='food-description'>
          <h3>Your Favourite Food Delivered Hot & Fresh</h3>
          <p>
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
