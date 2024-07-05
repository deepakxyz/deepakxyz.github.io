import React from 'react';
import {Link} from 'react-router-dom';
import adya from '../media/images/adya.png';
import Footer from '../components/Footer';

const ArtPage = () => {
    return (
        <>
        <div className='content'>
            <div className='work-sub-heading-wrapper'>
                <div className='work-sub-heading'>
                    Art
                </div>
                <div className = 'sub-heading-side'>
                    <Link to ="">Procedural</Link>
                    <Link to ="">Digital</Link>
                </div>
            </div>
            <div className='art-image-layout'>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
                <ArtImage/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default ArtPage;



const ArtImage = () => {
    return (
        <>
        <div className="art-image-wrapper">
        <div className='image-detail'>
            01 ADYA
        </div>
        <img src={adya} className='art-image'/>
        </div>
        </>
    )
}