import React from 'react';
import Hero from './Components/Hero';
import Demo from './Components/Demo';
import './App.css';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
      <main>
        <div className="">
          <div className="gradient" />
          <div className="app">
            <Hero />
            <Demo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
