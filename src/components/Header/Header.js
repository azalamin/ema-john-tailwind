import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className='py-5'>
            <nav className='flex items-center justify-between px-6'>
                <div className=''>
                    <img src={logo} alt="" />
                </div>
                <div className='text-right text-white'>
                    <a className='px-4' href="home">Home</a>
                    <a className='px-4' href="/order">Order</a>
                    <a className='px-4' href="/review">Order Review</a>
                    <a className='px-4' href="/inventory">Manage Inventory</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;