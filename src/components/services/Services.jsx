import React, { useState, useRef } from "react";
import "./Services.css";
import macbook from "../../assets/images/Macbook.png";
import Playstore from "../download-icons/Playstore";
import Appstore from "../download-icons/Appstore";
import AxioCircle from "./Axio-Circle";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { gsap,Power4 } from "gsap";
import {useIntersection} from 'react-use';

const Services = () => {
  const [isToggled, setIsToggled] = useState(false);

  const openFeatureToggler = () => {
    setIsToggled(!isToggled);
  };

  const [isToggled2, setIsToggled2] = useState(false);

  const openFeatureToggler2 = () => {
    setIsToggled2(!isToggled2);
  };

  const circleRef= useRef(null);
  const detailRef= useRef(null);
  const withRef= useRef(null);
//ANIMATION FOR THE FEATURE DETAIL

  const intersect = useIntersection (detailRef,{
    root: null,
    rootMargin: '0px',
    threshold:0.5
  });

  const detail = () =>{
    gsap.to(detailRef.current, {
      duration: 1,
      opacity: 1,
      y: -30,
      delay: .2,
      ease: Power4.easeOut,
      stagger: {
        amount: 0.3,
      },
    });
  }


    const detailOut = () => {
    gsap.to(detailRef.current, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: Power4.easeOut,
    });
  };

  intersect && intersect.intersectionRatio < 0.5
    ? detailOut(".detail")
    : detail(".detail");
//ANIMATION FOR THE CIRCLE 
  const intersection = useIntersection (circleRef,{
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  const circle = () =>{
    gsap.fromTo (circleRef.current, {opacity:0, scale:0, rotation:720,}, {duration:1, delay:1, opacity:1, scale:1, rotation:0,})
  }


    const circleOut = () => {
    // gsap.to(aboutRef.current, {
    //   duration: 1,
    //   opacity: 0,
    //   y: -20,
    //   ease: Power4.easeOut,
    // });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? circleOut(".circle")
    : circle(".circle");


  return (
    <div className="services mt-5" id="services">
      <div className="service-2">
        <div className="service-2-feature">
          <h1>USERS FEATURES</h1>
          <h2>Individual</h2>
          <p>
            Do you want your small-scale goods delivered with an accommodative price and stress-free?
          </p>
          <div className={`toggle-menu ${isToggled2 ? "active" : ""}`}>
            {" "}
            <p>Start using Axio for day-to-day delivery.</p>
          </div>
          <div className="feature-btn" onClick={openFeatureToggler2}>
            {" "}
            {!isToggled2 ? "Read More" : "Show Less"}{" "}
            <span className="icon-alignment">
              {!isToggled2 ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
            </span>
          </div>
          <div className="feature-linethrough"></div>
        </div>

        <div className="service-2-feature">
          <h1>DRIVERS FEATURES</h1>
          <h2>Individual</h2>
          <p>Want to make extra money?</p>
          <div className={`toggle-menu ${isToggled ? "active" : ""}`}>
            <p>Get started  with Axio by delivering small scale packages and  goods for individuals and businesses</p>
          </div>
          <div className="feature-btn" onClick={openFeatureToggler}>
            {" "}
            {!isToggled ? "Read More" : "Show Less"}{" "}
            <span className="material-icons-sharp icon-alignment">
              {!isToggled ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
            </span>
          </div>
          <div className="feature-linethrough"></div>
        </div>
      </div>
      <div className="service-3" id="features">
        <div ref={detailRef} className="features-details detail">
          <h1>
            All the features <br /> to make your life easy
          </h1>
          <ul>
            <li>Simple and interactive design</li>
            <li>Eazy navigation </li>
            <li>Captain tracker </li>
            <li>Fast and secured transactions</li>
            <li>Avalanche of choices</li>
            <li>Enjoy all these in luxurious style.</li>
            <li>Axio is creating more features to aid you live at ease</li>
          </ul>
        </div>
        <div  ref={circleRef} className="axio-circle circle">
          <AxioCircle />
        </div>
      </div>

      <div className="service-4">
        <div  ref={withRef} className="axio-personality-texts">
          <h1>
            With AXIO <br /> you can be sure <br /> of something
          </h1>
          <h3>
            These are four personalities to <br /> relate with when using Axio.
          </h3>
        </div>
        <div className="personality-image-container">
          <div className="axio-personality-images">
            <div className="personality-box-1">
              <div className="personality-item personality-item-1 ">
                <div className="dark-layer">
                  <h2>Ease</h2>
                  <p>
                    You don???t have to worry about delivery stress, every process
                    is easy!
                  </p>
                </div>
              </div>
              <div className="personality-item personality-item-2">
                <div className="dark-layer">
                  <h2>Speed</h2>
                  <p>
                    Faster than flash! Axio ensures your goods are delivered as
                    fast as possible without misplacement
                  </p>
                </div>
              </div>
            </div>
            <div className="personality-box-2">
              <div className="personality-item personality-item-3">
                <div className="dark-layer">
                  <h2>Security</h2>
                  <p>
                    With your goods being our priority, you can relax knowing
                    that it is safe!
                  </p>
                </div>
              </div>
              <div className="personality-item personality-item-4">
                <div className="dark-layer">
                  <h2>Solution</h2>
                  <p>
                    Axio the master planner is here to provide solutions to all
                    your delivery problems!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-5">
        <div className="device-imgs">
          <a className="device-img macbook" href="/#">
            <img src={macbook} alt="macbook" />
          </a>
        </div>
        <div className="download-section ">
          <h1>
            Download Axio app to ease the <br /> stress of website search <br />{" "}
            and enjoy numerous updates on the App!
          </h1>
          <div className="download-section-icons">
            <a className="download-section-icon" href="/">
              <Playstore />
            </a>
            <a className="download-section-icon" href="/">
              <Appstore />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
