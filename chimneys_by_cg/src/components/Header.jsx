// src/components/Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Chimney Restoration By Charles Gilliam</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Blog Posts</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

