import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <span className="logo-text">AI Rity</span>
          </div>
          <p className="copyright">Copyright © 2023 AI Rity</p>
        </div>
        
        <div className="footer-center">
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/testimonials">Testimonials</a>
          </nav>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="https://instagram.com" className="social-link">Instagram</a>
            <a href="https://facebook.com" className="social-link">Facebook</a>
            <a href="https://twitter.com" className="social-link">Twitter</a>
          </div>
          <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;