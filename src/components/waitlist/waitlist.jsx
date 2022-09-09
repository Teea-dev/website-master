import React from "react";
import "./waitlist.css";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import image from "../../assets/images/Macbook.png";
import logo from "../../assets/images/Axio.svg";
import desktop from "../../assets/images/AXIO 2.png";
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Waitlist = () => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }


    const [state, handleSubmit] = useForm("mjvzbnqz");
    if (state.succeeded) {
        
    }
    const form = (e) =>{
        e.preventDefault();
        window.location.replace('/#form')
    }

    return (
        <div className="">
            
            <div className="section1 row col-12">
                <div className="section1-text col-lg-6 col-md-12 col-sm-12">
                    <div className='icon-div'>
                        <img src={logo} alt="icon" className="icon d-block d-md-none" />
                        <img src={desktop} alt="desktop-logo" className="desktop-icon d-none d-md-block" />
                    </div>
                    <div className="">
                        <h1 className="">Get connected with people traveling to the same destination as your goods.</h1>
                    </div>
                    <div className="">
                        <p className="">Our mission is to provide decentralized delivering processes and create an opportunity for individuals to earn</p>
                    </div>
                    <a className="btn btn-primary " onClick={form}>Join the waitlist</a>
                    <a className="btn story btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeRK7HvyPDu3ghe1MHm6DHFJVJ2GUcPr9SWSdnR4ltl8mUmQQ/viewform" target='_blank'> our market survey </a>
                </div>
                <div className="section1-img col-lg-6 col-md-12 col-sm-12 mt-3">
                    <img src={image} alt="laptop" className="fadeIn" width='450px' />
                </div>
            </div>

            <div className="section2 col-12">
                <div>
                    <p className="">Be the first to enjoy our endless services.Join the waitlist!!</p>
                </div>
                <form action="" method="POST" className='form1' id={'form'} onSubmit={handleSubmit} >
                    <div className="col-12 section2-input">
                        <input type="text" name="First name" id="First name" placeholder="First name" required/>
                        <input type="text" name="Last name" id="Last name" placeholder="Last name" required/>
                    </div>
                    <div className="col-12 input1">
                        <input type="email" name="Email" id="Email" placeholder="Email" required/>
                    </div>
                    <button type="submit" disabled={state.submitting} onClick={toggleModal} className='submit-btn btn-alert btn'>Join</button>
                </form>
                {modal && (
                    <div className="popup" onClick={toggleModal}>
                        <p>thanks for joining!</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Waitlist;

