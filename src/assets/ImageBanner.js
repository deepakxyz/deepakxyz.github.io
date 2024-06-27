import React, { useEffect } from 'react';
import yazhi from '../media/images/yazhi.png';
import adya from '../media/images/adya.png';
import bannerVid from "../media/vid/banner24.mp4";


const HomeImageBanner = () => {
    return (
        <>
        <div className="image-banner-wrapper">
            <video loop muted autoPlay className='image-banner'>
                <source src={bannerVid} type="video/mp4"/>
                <img src={yazhi} className='image-banner' alt="banner image"/>
            </video>
            <div className="overlay-text">
                <div className="main-heading">
                    VIEW the SHOWREEL
                </div>
                <p>genralist work 2024 *</p>
            </div>
            <div className="overlay-bottom-left">
                <div>contains both personal and <br/>professional [creature fx] work</div>
            </div>
        </div>
        </>
    )
}

export default HomeImageBanner;