import React from 'react';
import partner1 from '../../assets/images/partner1.png';
import partner2 from '../../assets/images/partner2.png';    
import partner3 from '../../assets/images/partner3.png';
import partner4 from '../../assets/images/partner4.png';
import partner5 from '../../assets/images/partner5.png';
import partner6 from '../../assets/images/partner6.png';
import partner7 from '../../assets/images/partner7.png';
import partner8 from '../../assets/images/partner8.png';
import { Autoplay, Navigation } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/modules/navgation/navigation.css";
import "./Partners.css";

// import required modules

const Partners = () => {
    return (        
        <div className='partner-details'>
            <h1 className="partner-title">TRUSTED PARTNERS</h1>
            <Swiper 
                navigation={true}
                modules={[Autoplay, Navigation]} 
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                className="mySwipers"
            >
                <SwiperSlide>
                    <div className="partner-swiper">
                        <img src={partner1} alt="partner1" />
                        <img src={partner2} alt="partner2" />   
                        <img src={partner3} alt="partner3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-swiper">
                        <img src={partner4} alt="partner4" />
                        <img src={partner5} alt="partner5" />
                        <img src={partner6} alt="partner6" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-swiper">
                        <img src={partner7} alt="partner4" />
                        <img src={partner8} alt="partner5" />
                        <img src={partner2} alt="partner6" />
                    </div>
                </SwiperSlide>
            </Swiper>
        
        </div>
    )
}

export default Partners;