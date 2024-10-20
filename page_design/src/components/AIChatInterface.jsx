import React from 'react';
import './AIChatInterface.css';
// Import your phone image - update the path according to your project structure
import phoneImage from '../assets/phoneImage.png'; // Adjust this path

const AIChatInterface = () => {
  return (
    <div className="main-container">
      <div className="chat-section">
        <img src={phoneImage} alt="Phone frame" className="phone-frame" />
      </div>

      <div className="options-section">
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <span>Finding information</span>
          </div>
        </div>

        <div className="options-list">
          <div className="option-card active">
            <div className="option-header">
              <span className="option-icon">🎨</span>
              <span>Help for designers</span>
            </div>
            <p className="option-description">
              AI-powered applications can analyze vast amounts of visual data and provide designers with inspiration for their creative projects.
            </p>
          </div>

          <div className="option-card">
            <div className="option-header">
              <span className="option-icon">🏠</span>
              <span>Home automation</span>
            </div>
          </div>

          <div className="option-card">
            <div className="option-header">
              <span className="option-icon">🎬</span>
              <span>Entertainment</span>
            </div>
          </div>

          <div className="option-card">
            <div className="option-header">
              <span className="option-icon">📅</span>
              <span>Planning assistance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatInterface;