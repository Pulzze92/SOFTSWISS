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
    <section className="offers">
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
        <div className="offers__info">
          <h3 className="offers__info-title">Embark on a space journey</h3>
          <p className="offers__info-text">Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
          <button className="offers__info-button">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Offers; 