import React from 'react';
import logo from './images/pro-patria.svg';

const Header = () => {
    return (
      <div className='header-menu-wrapper header-text'>
        <div className='header-menu-wrapper-item-1'>
          <img src={logo} alt="logo" />
        </div>
        <div className='header-menu-wrapper-item-2 cursor-pointer'>
          <a>Про фонд</a>
          <a>Проекти</a>
          <a>Матеріали</a>
          <a>Партнери</a>
        </div>
        <div className='header-menu-wrapper-item-3'>
          <button className='header-menu-button header-text'>Підтримати</button>
        </div>
      </div>
    );
  }
  
  export default Header;