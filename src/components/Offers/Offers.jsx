import React from 'react';
import './Offers.scss';

import offer_1 from '../../assets/images/offers/reality_borders.png';
import offer_2 from '../../assets/images/offers/stars_and_planets.png';
import offer_3 from '../../assets/images/offers/dream_of_stars.png';
import offer_4 from '../../assets/images/offers/fantastic_dreams.png';

const Offers = () => {
  const offerCards = [
    {
      id: 1,
      title: 'Move the borders of reality!',
      subtitle: "Go on a space adventure - it's possible with us!",
      image: offer_1,
      isWide: true
    },
    {
      id: 2,
      title: 'Space is not just stars and planets',
      subtitle: 'Go on a space adventure',
      image: offer_2,
    },
    {
      id: 3,
      title: 'For those who dream of stars',
      subtitle: 'Our offer: make your dream come true',
      image: offer_3,
    },
    {
      id: 4,
      title: 'Fulfill your fantastic dreams',
      subtitle: 'Space has never been so close',
      image: offer_4,
      isWide: true
    }
  ];

  return (
    <section className="offers" id="offers">
      <div className="container">
        <h2 className="offers__title">Offers</h2>
        <div className="offers__grid">
          {offerCards.map(card => (
            <div 
              key={card.id} 
              className={`offers__card ${card.isWide ? 'offers__card--wide' : ''}`}
              style={{backgroundImage: `url(${card.image})`}}
            >
              <div className="offers__card-content">
                <h3 className="offers__card-title">{card.title}</h3>
                <p className="offers__card-subtitle">{card.subtitle}</p>
                <button className="offers__card-button">Learn more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="offers__info-wrapper">
          <input type="checkbox" id="info-toggle" className="offers__info-toggle" />
          <div className="offers__info">
            <h3 className="offers__info-title">What is the secret of success?</h3>
            <p className="offers__info-text">
              The secret of success is very simple - you need to believe in yourself and your strengths. 
              Our company has been helping people realize their dreams of space travel for many years. 
              We have gathered the best specialists who will help you prepare for the flight and make 
              your journey as comfortable and safe as possible. We use the most modern technologies and 
              equipment to make your space adventure unforgettable.
            </p>
            <label htmlFor="info-toggle" className="offers__info-button"></label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers; 