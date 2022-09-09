import React from 'react';
import "./Appstore.css";
import appstore from "../../assets/images/appstore.png";

const Appstore = () => {
    return (
        <div className='appstore-container'>
            <div className='appstore-icon'>
                <img src={appstore} alt="" />
            </div>
            <div className='appstore-text'>
                <h3>GET IT ON</h3>
                <h2>Google Play</h2>
            </div>
        </div>
    )
}

export default Appstore;