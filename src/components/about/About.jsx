import React from 'react';
import "./About.css";
import deliveryMan3 from "../../assets/images/Delivery003 1.png";
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const About = () => {
    return (
    <div className="about-container" id='about'>
            <div className='about-container-1'>
                <div className='img-container'>
                    <img className="delivery-man-icon" src={deliveryMan3} alt="delivery-man" />
                </div>
            </div>

            <div className="about-container-2">
                <div className="about-container-section-1">
                <h1>ABOUT US</h1>
                <p>Axio is a reliable platform that links you up with people going to the same location as your
                    goods. Axio is also a platform that provides employment opportunities to travelers and vehicle
                    owners. It was built to reduce traffic stress, costs of transport, and to make goods transfer more
                    reliable and economical. This amazing website is well known for its seamless delivery
                    processes, transparency, and reliability.</p>
                </div>

                <div className="about-container-section-2">
                    <div className="text">
                        <h1>VISION</h1>
                        <p>Our mission is to provide decentralized delivering processes and create an opportunity for travelers to earn.</p>
                    </div>
                    <div className='social-icons'>
                        <a href="https://facebook.com/axiohq/" target="_blank" rel="noreferrer">
                            <div className="social-icon instagram">
                                <FaFacebookF className='socialss' />
                            </div>
                        </a>
                        <a href="https://twitter.com/axiohq/" target="_blank" rel="noreferrer">
                            <div className="social-icon twitter">
                                <FaTwitter className='socialss' />
                            </div>
                        </a>
                        <a href="https://instagram.com/axiohq/" target="_blank" rel="noreferrer">
                            <div className="social-icon linkedin">
                                <FaInstagram className='socialss' />
                            </div>
                        </a>
                    </div>
                </div>
            </div> 
    </div>
    )
}

export default About;