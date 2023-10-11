import React from 'react';
import './Header.css';
import logo from '../../assets/logo1.png'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" className='logo' />
            
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Services</li>
                <li>Conseils</li>
            </ul>
            
        </div>
    );
}

export default Header;
