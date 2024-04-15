import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
        <div className='header'>
            <div className='logo'>
                <Link to="/"><span className='bold'>DEEPAK</span> RAJAN | 2024</Link>
            </div>
            <div className='menu'>
                <Link to="/works" className='menu-item'>WORKS</Link>
                <Link to="/art" className='menu-item'>ART</Link>
                <Link to="/blogs" className='menu-item'>BLOGS</Link>
                <Link to="/profile" className='fill'>PROFILE</Link>
            </div>
        </div>
        <Outlet/>
        </>
    )
}

export default Header;