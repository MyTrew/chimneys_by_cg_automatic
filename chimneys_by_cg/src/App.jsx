// src/App.jsx
import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import BioSection from './components/BioSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <section id="about">
        <BioSection />
      </section>
      <section id="services">
        <BlogSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
