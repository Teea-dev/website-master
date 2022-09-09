import React from "react";
import "./Header.css";
import delivery from "../../assets/images/Delivery002 1.png";
import Playstore from "../download-icons/Playstore";
import Appstore from "../download-icons/Appstore";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

const Header = () => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }


    const [state, handleSubmit] = useForm("mjvzbnqz");
    if (state.succeeded) {
        
    }

    return (
        <div className="header-container">
            <div className="header-container-1">
                <div className="header-container-1-1">
                    <h1>Decentralized <br /> Living.</h1>
                    <p>Axio splatters delivery at your doorstep by uniting you with people traveling to the same destination as your goods.</p>
                </div>
                <div className="header-container-1-2">
                    <div className="download-icons">
                        <div>
                            <a className="download-section-icon" href="/"><Playstore /></a>
                        </div>
                        <div>
                            <a className="download-section-icon" href="/"><Appstore /></a>
                        </div>
                    </div>
                    <div className="subscribe">
                        <div>
                            <p>Join the waitlist</p>
                        </div>
                        <div className="register">
                            <a href="/join" className="btn btn-register">
                                Join waitlist{" "}
                            </a>
                        </div>
                        {/* <form action="" method="POST" onSubmit={handleSubmit} >
                            <input type="email" name="Email" id="Email" placeholder="Enter Email" required/>
                            <button type="submit" disabled={state.submitting} onClick={toggleModal} className='submit-btn'>Join</button>
                        </form> */}
                        
                        {modal && (
                            <div className="popup" onClick={toggleModal}>
                                <h4>Thanks for joining us!</h4>
                                <button onClick={toggleModal}>close</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='header-container-2'>
                <img className="delivery-icon" src={delivery} alt="delivery-man" />
            </div>
        </div>
    )
}

export default Header;

