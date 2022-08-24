import React from 'react';
import Nav from '../Nav';
import logo from '../../assets/images/logo.svg';

const Header = ()=> {
    return(
        <header>
            <div className='nav'>
                <Nav />
            </div>
            <img
                src={logo}
                alt='gilina mcbride logo'
            />
        </header>
    )
}

export default Header;