import React from 'react';
import './Banner.scss';

import banner_earth from '../../assets/images/banner/banner_earth.png';

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="banner__container">
        <div className="banner__content-left">
          <h1 className="banner__title">Discover the vast expanses of <span>space</span></h1>
          <p className="banner__subtitle">Where the possibilities are <span>endless!</span></p>
          <button className="banner__button">Learn more</button>
        </div>
        <div className="banner__content-right">
          <img src={banner_earth} alt="banner_image" />
        </div>
      </div>
    </section>
  );
};

export default Banner; 