import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
    </div>
  );
};

export default App; 