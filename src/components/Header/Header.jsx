import React, { useState, useEffect } from 'react';
import './Header.scss';

import logo from '../../assets/icons/logo.svg';
import brand_name from '../../assets/icons/brand_name.svg';
import cart from '../../assets/icons/cart.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('banner');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      threshold: 0.5,
      rootMargin: '-80px 0px 0px 0px'
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const offsetTop = section.offsetTop;
    
    window.scrollTo({
      top: offsetTop - 80,
      behavior: 'smooth'
    });

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#banner" onClick={scrollToSection}>
            <img src={logo} alt="logo" />
            <img src={brand_name} alt="brand_go" />
          </a>
        </div>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--active' : ''}`}>
          <ul className="header__menu">
            <li className={`header__menu-item ${activeSection === 'banner' ? 'active' : ''}`}>
              <a href="#banner" onClick={scrollToSection}>Home</a>
            </li>
            <li className={`header__menu-item ${activeSection === 'offers' ? 'active' : ''}`}>
              <a href="#offers" onClick={scrollToSection}>Products</a>
            </li>
            <li className="header__menu-item">
              <a href="#cart" onClick={scrollToSection}><img src={cart} alt="cart" /></a>
            </li>
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