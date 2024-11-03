// src/App.jsx
import React from 'react';
import './App.css';
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
      <BioSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
