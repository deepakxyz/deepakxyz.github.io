import React from 'react';
import yazhi from '../media/images/yazhi.png';
import adya from '../media/images/adya.png';
import bannerVid from "../media/vid/output_video.mp4";
import bannerVid1 from "../media/vid/mermaid_final.mp4";


const HomeImageBanner = () => {
    return (
        <>
        <div className="image-banner-wrapper">
            <video autoPlay loop muted src={bannerVid} poster={yazhi} type="video/mp4" className='image-banner'/>
            {/* <video loop muted autoPlay className='image-banner'>
                <source src={bannerVid} type="video/mp4"/ >
                <img src={yazhi} className='image-banner' alt="banner image"/>
            </video> */}
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