import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <h1 className="banner__title">Discover the vast expanses of space</h1>
        <p className="banner__subtitle">Where the possibilities are endless!</p>
        <button className="banner__button">Learn more</button>
      </div>
    </section>
  );
};

export default Banner; 