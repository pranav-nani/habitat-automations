// src/App.js
import React from 'react';
import Header from './components/Header.js';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials.js';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About />
      <Team />
      <Contact />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
