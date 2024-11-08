// src/components/HeroSlider.jsx
import React, { useEffect, useState } from 'react';
import './HeroSlider.css';

const images = [
  "/images/IMG7.jpg",
  "/images/IMG8.jpg",
  "/images/IMG9.jpg",
  "/images/IMG10.jpg",
  "/images/IMG11.jpg",
  "/images/IMG12.jpg",
  "/images/IMG13.jpg",
  "/images/IMG14.jpg",
  "/images/IMG15.jpg",
  "/images/IMG16.jpg",
  "/images/IMG17.jpg",
  "/images/IMG18.jpg",
  "/images/IMG19.jpg",
  "/images/IMG20.jpg",
  "/images/IMG21.jpg",
  "/images/IMG22.jpg",
  "/images/IMG23.jpg",
  "/images/IMG24.jpg",
  "/images/IMG25.jpg",
  "/images/IMG26.jpg",
  "/images/IMG27.jpg",
  "/images/IMG28.jpg",
  "/images/IMG29.jpg",
  "/images/IMG30.jpg",
  "/images/IMG31.jpg",
  "/images/IMG32.jpg",
  "/images/IMG33.jpg",
  "/images/IMG34.jpg",
  "/images/IMG35.jpg",
  "/images/IMG36.jpg",
  "/images/IMG37.jpg",
  "/images/IMG38.jpg",
  "/images/IMG39.jpg",
  "/images/IMG40.jpg",
  "/images/IMG41.jpg",
  "/images/IMG42.jpg",
  "/images/IMG43.jpg",
  "/images/IMG44.jpg",
  "/images/IMG45.jpg",
  "/images/IMG46.jpg",
  "/images/IMG47.jpg",
  "/images/IMG48.jpg",
  "/images/IMG49.jpg",
  "/images/IMG50.jpg",
  "/images/IMG51.jpg",
  "/images/IMG52.jpg",
  "/images/IMG53.jpg",
  "/images/IMG54.jpg",
  "/images/IMG55.jpg",
  "/images/IMG56.jpg",
  "/images/IMG57.jpg",
  "/images/IMG58.jpg",
  "/images/IMG59.jpg",
  "/images/IMG60.jpg",
  "/images/IMG61.jpg",
  "/images/IMG62.jpg",
  "/images/IMG63.jpg",
  "/images/IMG64.jpg",
  "/images/IMG65.jpg",
  "/images/IMG66.jpg",
  "/images/IMG67.jpg",
  "/images/IMG68.jpg",
  "/images/IMG69.jpg",
  "/images/IMG70.jpg",
  "/images/IMG71.jpg",
  "/images/IMG72.jpg",
  "/images/IMG73.jpg",
  "/images/IMG74.jpg",
  "/images/IMG75.jpg",
  "/images/IMG76.jpg",
  "/images/IMG77.jpg",
  "/images/IMG78.jpg",
  "/images/IMG79.jpg",
  "/images/IMG80.jpg",
  "/images/IMG81.jpg",
  "/images/IMG82.jpg",
  "/images/IMG83.jpg",
  "/images/IMG84.jpg",
  "/images/IMG85.jpg",
  "/images/IMG86.jpg",
  "/images/IMG87.jpg",
  "/images/IMG88.jpg",
  "/images/IMG89.jpg",
  "/images/IMG90.jpg",
  "/images/IMG91.jpg",
  "/images/IMG92.jpg",
  "/images/IMG93.jpg",
  "/images/IMG94.jpg",
  "/images/IMG95.jpg",
  "/images/IMG96.jpg",
  "/images/IMG97.jpg",
  "/images/IMG98.jpg",
  "/images/IMG99.jpg",
  "/images/IMG100.jpg",
  "/images/IMG101.jpg",
  "/images/IMG102.jpg",
  "/images/IMG103.jpg",
  "/images/IMG104.jpg",
  "/images/IMG105.jpg",
  "/images/IMG106.jpg",
  "/images/IMG107.jpg",
  "/images/IMG108.jpg",
  "/images/IMG109.jpg",
  "/images/IMG110.jpg",
  "/images/IMG111.jpg",
  "/images/IMG112.jpg",
  "/images/IMG113.jpg",
  "/images/IMG114.jpg",
  "/images/IMG115.jpg",
  "/images/IMG116.jpg",
  "/images/IMG117.jpg",
  "/images/IMG118.jpg",
  "/images/IMG119.jpg",
  "/images/IMG120.jpg",
  "/images/IMG121.jpg",
  "/images/IMG122.jpg",
  "/images/IMG123.jpg",
  "/images/IMG124.jpg",
  "/images/IMG125.jpg",
  "/images/IMG126.jpg",
  "/images/IMG127.jpg",
  "/images/IMG128.jpg",
  "/images/IMG129.jpg",
  "/images/IMG130.jpg",
  "/images/IMG131.jpg",
  "/images/IMG132.jpg",
  "/images/IMG133.jpg",
  "/images/IMG134.jpg"
  
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide changes every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
