import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import "./FooterStyles.css";
import { BsTwitter, BsLinkedin, BsYoutube, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div id='footer'>
      <SectionHeader>footer</SectionHeader>
      <div className='footer-container'>
        <h2>FOODIE</h2>
        <div className='footer-row'>
          <div>
            <BsTwitter />
          </div>
          <div>
            <BsLinkedin />
          </div>
          <div>
            <BsYoutube />
          </div>
          <div>
            <BsFacebook />
          </div>
        </div>
      </div>
      <div className='footer-grid'>
        <div>
          <ul>
            <li>quantity</li>
            <li>help</li>
            <li>share</li>
            <li>carriers</li>
            <li>testimonials</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>0486-65-87-97</li>
            <li>
              <a href="mailto:'ahmet@79@hotmail.be'">ahmet@79@hotmail.be</a>
            </li>
            <li>Foodie@hotmail.com</li>
            <li>Contact-foodie@hotmail.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
