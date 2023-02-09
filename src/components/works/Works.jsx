import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import "./WorksStyles.css";
import IMGCARD from "../../assets/img8.png";
import IMGCARD2 from "../../assets/img3.png";
import IMGCARD3 from "../../assets/img4.png";
const Works = () => {
  return (
    <div id='works'>
      <SectionHeader>Works</SectionHeader>
      <div className='works-container'>
        <div className='works-container-content'>
          <h1>How it works</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>

        <div className='works-container-grid'>
          <div className='works-card'>
            <img src={IMGCARD} />
            <h3>Pick Meals</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
              duis elementum interdum facilisi bibendum.
            </p>
          </div>

          <div className='works-card'>
            <img src={IMGCARD2} />
            <h3>Choose How Often</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et </p>
          </div>

          <div className='works-card'>
            <img src={IMGCARD3} />
            <h3>Fast Deliveries</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem
              ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
