import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/images/AXIO Icon.png";
import { FaAlignJustify, FaUser } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Nav = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openMenuHandler = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav>
      <div className="container-width">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <span className=" toggle-button" onClick={openMenuHandler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          {/* <FaAlignJustify /> */}
        </span>
        <div className={`small-menu ${isOpened ? "active" : ""}`}>
          <span
            className="material-icons-sharp menu-open"
            onClick={openMenuHandler}
          >
            <BsXLg />
          </span>
          <div className="nav-links">
            <ul>
              {/* <li  onClick={openMenuHandler}className='features-dropdown'><a href="#features">Features <span class="material-icons-sharp icon-alignment">expand_more</span></a></li> */}
              <li onClick={openMenuHandler} className="features-dropdown">
                <a href="#features">Features</a>
              </li>
              <li onClick={openMenuHandler}>
                <a href="#about">About</a>
              </li>
              <li onClick={openMenuHandler}>
                <a href="#services">Services</a>
              </li>
              <li onClick={openMenuHandler}>
                <a href="#testimonies">Testimonies</a>
              </li>
              <li onClick={openMenuHandler}>
                <a href="#footer">Support</a>
              </li>
            </ul>
          </div>
          <div className="cta">
            
            <div className="register">
              <a href="/join" className="btn btn-register">
                Join waitlist{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
