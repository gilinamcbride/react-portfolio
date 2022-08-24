import React from 'react';
import Nav from '../Nav';
import logo from '../../assets/images/logo.svg';

const Header = ()=> {
    return(
        <header>
            <div className='nav'>
                <Nav />
            </div>
            <a href="/">
                <img
                    src={logo}
                    alt='gilina mcbride logo'
                    key="gilina mcbride logo"
                />
            </a>
        </header>
    )
}

export default Header;