import React from "react";
import "./Testimonies.css";
import Testimonybox from './Testimonybox';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Keyboard, Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const Testimonies = () => {

    const testimonies = [
        "I was a bit skeptical about this website when I used it but I was glad to know that it is truly reliable.",
        "I have been using Axio for 5months now and I have no complaints about it.",
        "Life has become easier as my customers receive their goods faster without misplacement. Thank you, Axio",
        "I have been earning with Axio for a while now and I am glad I signed up as a distributor",
        "Anytime I travel I make sure I log into my axio account just to earn extra cash",
        "I have been using Axio for a while now and I am glad I signed up as a distributor",
    ]

    return (
        <div className='testimonies' id="testimonies">
            <div className="testimonie-1">
                <h1>TESTIMONIES</h1>
            </div>

            <Swiper
                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                slidesPerView={(window.innerWidth < 853) ? 1 : 3}
                pagination={{clickable: true}}
                loop={true}
                effect={"fade"}
                mousewheel={true}
                direction={"horizontal"}
                keyboard={{
                    enabled: true,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {
                    testimonies.map(content => {
                        return(
                            <SwiperSlide className="swiperSlide">
                                <Testimonybox content={content} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            {/* <div className='linethrough'></div> */}
        </div>
    )
}

export default Testimonies;