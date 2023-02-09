import React, { useState } from "react";
import SectionHeader from "../section-header/SectionHeader";
import IMG1 from "../../assets/img7.png";
import IMG2 from "../../assets/img5.png";
import IMG3 from "../../assets/img4.png";
import IMG4 from "../../assets/img3.png";
import "./TestimonialStyles.css";
const Testimonial = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      txt: "lorem1",
      person: "john doe",
      stars: "*****",
      id: 1,
    },
    {
      img: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      txt: "lorem2",
      stars: "*****",
      id: 2,
      person: "john doe2",
    },
    {
      img: "https://images.unsplash.com/photo-1634848860108-6d8368f5a0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      txt: "lorem3",
      stars: "**",
      id: 3,
      person: "john doe3",
    },
    {
      img: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlbmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      txt: "lorem4",
      stars: "*",
      id: 4,
      person: "john doe4",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    let newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div id='testimonial'>
      <SectionHeader>Testimonial</SectionHeader>
      <div className='testimonial-container'>
        <h2>What They Are Saying</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className='img-slider'>
        <img src={slides[currentIndex].img} />
        <h4>{slides[currentIndex].person}</h4>
        <p>{slides[currentIndex].txt}</p>
        <p>{slides[currentIndex].stars}</p>
        <button onClick={nextSlide} id='next'>
          NEXT
        </button>
        <button onClick={prevSlide} id='prev'>
          BACK
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
