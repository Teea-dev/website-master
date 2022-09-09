import React from 'react';
import "./Playstore.css";
import playstore from "../../assets/images/playstore.png";

const Playstore = () => {
    return (
        <div className='playstore-container'>
            <div className='playstore-icon'>
                <img src={playstore} alt="" />
            </div>
            <div className='playstore-text'>
                <h3>GET IT ON</h3>
                <h2>Google Play</h2>
            </div>
        </div>
    )
}

export default Playstore;