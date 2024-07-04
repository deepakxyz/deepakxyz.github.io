import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const HomeContentWrapper = () => {
    const data = [
        {date:"sep-24 | blog", heading: "Triplets", desc:"an animated short based on indian characters", link:"/blogs"},
        {date:"sep-24 | work", heading: "Storyboards", desc:"just some random storyboard practices", link:"/art"},
        {date:"sep-24 | dev", heading: "Groom Deformer", desc:"Render time houdini groom deform procedural", link:"/works"},
    ]
    return (
        <>
        <div className="home-content-wrapper">
            {/* {data.map((item, index)=> (
                <HomeContent key={index} 
                    link={item.link}
                />
            ))} */}
            <div className="content-wrapper">
                <div className="catogary">CURRENT PROJECT</div>
                <div className="heading">
                    <Link to ="">
                    The Current Project
                    </Link>
                </div>

            </div>
            <div className="content-wrapper">
                <div className="catogary">ART</div>
                <HomeContent heading='development'/>
                <HomeContent heading='storyboard'/>

            </div>
            <div className="content-wrapper">

                <div className="catogary">DEV</div>
                <HomeContent heading='Deformer'/>
                <HomeContent heading='Ray Traacer'/>
                <HomeContent heading='Pinkman TV'/>

            </div>
            <div className="content-wrapper">

                {/* <HomeContent heading='hello'/>
                <HomeContent heading='hello'/> */}
                <div className="content">
                    This is something i wanted to talk about , if you want ot join come and join us.
                </div>

            </div>

        </div>
        </>
    )
}

const HomeContent = ({heading, link}) => {
    return (
        <>
        <Link to ={link}>
        <div className="sub-link">
            {heading}
        </div>
        </Link>
        </>
    )
}

export default HomeContentWrapper;