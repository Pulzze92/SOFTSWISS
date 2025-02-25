import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App; 