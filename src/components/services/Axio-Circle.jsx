import React from 'react';
import "./Axio-Circle.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const axioCircle = () => {
    return (
    <main>
        <div className="outer">
            <Tippy
                content={<p className='tippy-text'>Still not convinced? You can ride along with your items to the appointed spot with Axio, using 
                the Axio-Ride-Along page!.</p>}
                arrow={true}
                interactive={true}
                animation="scale"
                duration={0}
                delay={[300, 0]}
                flip={true}
                placement="bottom"
            ><div className="ride box">Axio Ride Along</div></Tippy>
            <Tippy
                content={<p className='tippy-text'>There are no hidden fees or surcharges, and the price can be changed at any time! 
                With axio, you may negotiate delivery costs to fit your demands.</p>}
                arrow={true}
                interactive={true}
                animation="scale"
                duration={0}
                delay={[300, 0]}
                flip={true}
                placement="bottom"
            ><div className="bargain box">Axio Bargain</div></Tippy>
            <Tippy
                content={<p className='tippy-text'>Make both long distance and short distance delivery with axio. Axio reaches a sizable portion of the Nigerian population. Local deliveries up to 70 miles are available, as well as regional and national deliveries the next day.</p>}
                arrow={true}
                interactive={true}
                animation="scale"
                duration={0}
                delay={[300, 0]}
                flip={true}
                placement="bottom"
            ><div className="mile box">Axio Mile</div></Tippy>
            <Tippy
                content={<p className='tippy-text'>You'll never have to worry about missing a delivery again. Axio provides real-time 
                tracking to live chat with the driver and track your packages every second they're on the road.</p>}
                arrow={true}
                interactive={true}
                animation="scale"
                duration={0}
                delay={[300, 0]}
                flip={true}
                placement="bottom"
            ><div className="zoom box">Axio Zoom</div></Tippy>
        </div>
        <div className="inner"></div>
    </main>
    )
}

export default axioCircle;