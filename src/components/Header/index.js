import React from 'react';
import logo from '../../assets/images/logo.svg';

const Header = ()=> {
    return(
        <header>
            <img
                src={logo}
                alt='gilina mcbride logo'
            />
            <a className="work-nav" href="./work.html">My Work</a>
            <a className="contact-nav" href="./assets/images/resume.pdf" target="_blank">Resume</a>
        </header>
    )
}

export default Header;