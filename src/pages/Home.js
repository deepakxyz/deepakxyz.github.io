import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import HomeImageBanner from '../assets/ImageBanner';
import HomeContentWrapper from '../assets/HomeContent';
import {ReactLenis, useLenis } from 'lenis/react';

const HomePage = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  // })
  return (
    <div className='content'>
    {/* <ReactLenis root> */}
      <HomeImageBanner/>
      <HomeContentWrapper/>
      <AustraliaTime timeZone="Australia/Adelaide" />   {/* AEST/AEDT */}
    {/* </ReactLenis> */}
    </div>
  );
};

export default HomePage;

// CURRENT TIME

const AustraliaTime = ({ timeZone }) => {
  const [currentTime, setCurrentTime] = useState(moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().tz(timeZone).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className='time-zone'>
      <p>AU {currentTime}</p>
      <div>
        <a href='mailto:deepakrajan.grea@gmail.com'>EMAIL</a>  | 
        <a href='https://www.instagram.com/deepak_rajan_/'> INSTAGRAM</a>
      </div>
    </div>
  );
};
