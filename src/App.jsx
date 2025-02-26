import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Offers />
      <Footer />
    </div>
  );
}

export default App; 