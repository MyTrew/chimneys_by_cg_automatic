// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Chimneys By CG. All Rights Reserved.</p>
      <ul className="footer-links">
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
      <div className="contact-card-wrapper">
        <img src="contact/Contact Card.jpg" alt="Contact Card" className="contact-card-image" />
        <p>Have a blessed day!</p>
      </div>
    </footer>
  );
}

export default Footer;
