import "./NavbarStyles.css";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showsNav, setShowsNav] = useState(false);
  return (
    <nav id='navbar'>
      <div className='navbar-logo'>
        <h1>FOODIE</h1>
      </div>

      <div
        className='navbar-items-mobile hidden'
        onClick={() => setShowsNav(!showsNav)}
      >
        {showsNav ? <AiFillCloseSquare /> : <GiHamburgerMenu />}
      </div>
      <ul className={showsNav ? "navbar-items " : " navbar-items notvisible"}>
        <li>
          <Link to='hero' spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
            about
          </Link>
        </li>
        <li>
          <Link to='works' spy={true} smooth={true} offset={50} duration={500}>
            works
          </Link>
        </li>
        <li>
          <Link
            to='testimonial'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            testimonials
          </Link>
        </li>
        <li className='navbar-item-booking'>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
