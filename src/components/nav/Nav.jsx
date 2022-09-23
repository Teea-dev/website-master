import React, { useState , useEffect, useRef} from "react";
import "./Nav.css";
import logo from "../../assets/images/AXIO Icon.png";
import { FaAlignJustify, FaUser } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import {gsap, Power3} from 'gsap';


const Nav = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openMenuHandler = () => {
    setIsOpened(!isOpened);
  };
   let nav = useRef(null);
  let feature =useRef(null);
  let about = useRef(null);
  let service = useRef(null);
  let testimony = useRef(null);
  let support = useRef(null);

  useEffect (()=>{
    gsap.to( nav.current,{ duration:1, css:{visibility:'visible'}})
    gsap.to ('.logo', {opacity:1, y:5, ease:Power3.easeOut, duration:1,})
    gsap.to (feature.current, {opacity:1, y:5, ease:Power3.easeOut, duration:1, delay:.2,})
    gsap.to (about.current, {opacity:1, y:5, ease:Power3.easeOut, duration:1, delay:.8,})
    gsap.to (service.current, {opacity:1, y:5, ease:Power3.easeOut, duration:1, delay:1.2,})
    gsap.to (testimony.current, {opacity:1, y:5, ease:Power3.easeOut, duration:1, delay:1.6,})
    gsap.to (support.current, {opacity:1, y:5, ease:Power3.easeOut, duration:1, delay:2,})
  },[])
  return (
    <nav>
      <div ref={nav} className="nav-bar container-width">
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
              <li ref={feature} onClick={openMenuHandler} className="feature features-dropdown">
                <a href="#features">Features</a>
              </li>
              <li  ref={about} onClick={openMenuHandler}>
                <a href="#about">About</a>
              </li>
              <li ref={service} onClick={openMenuHandler}>
                <a href="#services">Services</a>
              </li>
              <li ref={testimony}  onClick={openMenuHandler}>
                <a href="#testimonies">Testimonies</a>
              </li>
              <li  ref={support} onClick={openMenuHandler}>
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
