import React, { useEffect } from 'react';
import yazhi from '../media/images/yazhi.png';
import adya from '../media/images/adya.png';


const HomeImageBanner = () => {
    return (
        <>
        <div className="image-banner-wrapper">
            <img src={yazhi} className='image-banner' alt="banner image"/>
            <div className="overlay-text">
                <div className="main-heading">
                    VIEW the SHOWREEL
                </div>
                <p>genralist work 2024 *</p>
            </div>
            <div className="overlay-bottom-left">
                <div>contains both personal and <br/>professional work</div>
            </div>
        </div>
        </>
    )
}

export default HomeImageBanner;