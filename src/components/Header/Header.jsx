import React, { useState } from 'react';
import './Header.scss';

import logo from '../../assets/icons/logo.svg';
import brand_name from '../../assets/icons/brand_name.svg';
import cart from '../../assets/icons/cart.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
            <a href="#home">
                <img src={logo} alt="logo" />
                <img src={brand_name} alt="brand_go" />
            </a>
        </div>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--active' : ''}`}>
          <ul className="header__menu">
            <li className="header__menu-item"><a href="#home">Home</a></li>
            <li className="header__menu-item"><a href="#about">Products</a></li>
            <li className="header__menu-item"><a href="#gallery"><img src={cart} alt="cart" /></a></li>
          </ul>
        </nav>
        <button 
          className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 