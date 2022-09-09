import React from 'react';
import "./Footer.css";
import logoImg from  "../../assets/images/AXIO Icon.png";
import Playstore from "../download-icons/Playstore";
import Appstore from "../download-icons/Appstore";
import Android from "../../assets/images/playstore.svg";
import Ios from "../../assets/images/appstore.svg";
import logo from "../../assets/images/Axio.svg";
import Line from '../../assets/images/Line.svg';
import Phoneline from '../../assets/images/Mobileline.svg';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='col-12 footer-part'>
                <div className="container-1 col-6">
                    <div className="footer-1">
                        <div className='footer-1-1'>
                            <img src={logo} alt="axio-logo" />
                        </div>
                    </div>
                    <div className="download-icons">
                        <div>
                            <a className="download-section-icon" href="/"><Playstore /></a>
                        </div>
                        <div>
                            <a className="download-section-icon" href="/"><Appstore /></a>
                        </div>
                    </div>              
                </div>
                <div className="container-2 col-6">
                    <div>
                        <h3>Contact</h3>
                        <a href='mailto:support@axiotech.io'>support@axiotech.io</a>
                    </div>
                    <div className="container-2-1 footer-2-3">
                        <ul> 
                            <li className='socials-icon'><a href="https://facebook.com/axiohq/" target="_blank" rel="noreferrer"> <FaFacebookF  className='socials' /></a></li>
                            <li className='socials-icon'><a href="https://twitter.com/axiohq/" target="_blank" rel="noreferrer"> <FaTwitter  className='socials' /></a></li>
                            <li className='socials-icon'><a href="https://instagram.com/axiohq/" target="_blank" rel="noreferrer"> <FaInstagram  className='socials' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
                < img className='d-none d-md-block' src={Line} alt="line" />
                < img className='d-block d-md-none' src={Phoneline} alt="line"  />
            <div className="container-3">
                <div className='container-2-2'>
                    <p>Copyright 2022 Axio technologies.</p>
                </div>
                <div className='container-2-1'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                   
                </div>
            </div>
        </div>
    )
}

export default Footer