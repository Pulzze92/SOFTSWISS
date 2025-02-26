import React from 'react';
import './Footer.scss';
import rocket from '../../assets/icons/rocket.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <img src={rocket} alt="rocket" className="footer__rocket" />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 