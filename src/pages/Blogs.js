import React from 'react';
import {Link} from 'react-router-dom';
import adya from '../media/images/adya.png';
import Footer from '../components/Footer';


const BlogPage = () => {
    return (
        <>
        <div className='content'>
            <div className='work-sub-heading-wrapper'>
                <div className='work-sub-heading'>
                    Blog
                </div>
                <div className = 'sub-heading-side'>
                    <Link to ="">Procedural</Link>
                    <Link to ="">Digital</Link>
                </div>
            </div>
            <div className='blog-layout'>
                <div className="blog-layout-wrapper">
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                </div>
            </div>
        <Footer/>
        </div>
        </>
    )
}

export default BlogPage;


const BlogPost = () => {
    return (
        <>
            <div className="blog-post-wrapper">
                <img src={adya} className='blog-image'/>
                <div className='blog-details-wrapper'>
                    <Link to="">
                        <div className='blog-name'>
                            Test blog in work
                            <div className="blog-date">
                                SEP 24
                            </div>
                        </div>
                    </Link>
                    <div className="blog-tags">
                        VEX | HOUDINI | MATH
                    </div>
                </div>
                <div className='blog-desc'>
                    This is a test blog htat has 
                    This project is temp, and we will continue when it get to a better place EL GRITO is El Confidencial's magazine dedicated to art, design, and architecture. Our goal was to create a visually stunning product while remaining true to the core philosophy of El Confidencial.
                </div>
            </div>
        </>
    )
}