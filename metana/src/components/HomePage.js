// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">Buildform</div>
      </header>
      <main>
        <h1>Launch your Data Career in Weeks, not Years</h1>
        <p>What to expect:</p>
        <ul>
          <li><strong>Short-answer</strong> questions & No cover letter</li>
          <li>Takes 4 mins on average</li>
        </ul>
        <a to="/form">
          <button className="start-button">Start Your Journey</button>
        </a>
        <p className="footer-text">81 people have filled this out</p>
      </main>
    </div>
  );
}

export default HomePage;
