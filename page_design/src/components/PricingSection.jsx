import React from 'react';
import './PricingSection.css';
// Import your images - adjust paths according to your project structure
import phoneImage from '../assets/phoneImage.png';
// import appStore from '../assets/app-store.png';
// import playStore from '../assets/play-store.png';

const PricingSection = () => {
  const pricingData = [
    { 
      type: 'Basic',
      icon: '👋',
      color: '#E9FFE7',
      users: '1',
      support: 'Online',
      requests: '1000',
      storage: '1 GB',
      price: '$9.99'
    },
    {
      type: 'Advanced',
      icon: '⚡',
      color: '#F1E9FF',
      users: 'Up to 5',
      support: 'Priority',
      requests: '5000',
      storage: '5 GB',
      price: '$19.99'
    },
    {
      type: 'Premium',
      icon: '👑',
      color: '#FFE9B7',
      users: 'Unlimited',
      support: 'Premium',
      requests: 'Unlimited',
      storage: '10 GB',
      price: '$39.99'
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-table">
        <h1>Choose your favorite plan</h1>
        
        <div className="subscription-tabs">
          <div className="table-header">
            <div className="feature-label">Subscription level</div>
            <div className="plan-options">
              {pricingData.map((plan, index) => (
                <div 
                  key={index}
                  className="plan-tab"
                  style={{ backgroundColor: plan.color }}
                >
                  {plan.type} {plan.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="features-list">
            <div className="feature-row">
              <div className="feature-label">Number of Users</div>
              <div className="plan-values">
                {pricingData.map((plan, index) => (
                  <div key={index} className="plan-value">{plan.users}</div>
                ))}
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-label">Customer Support</div>
              <div className="plan-values">
                {pricingData.map((plan, index) => (
                  <div key={index} className="plan-value">{plan.support}</div>
                ))}
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-label">Monthly Requests</div>
              <div className="plan-values">
                {pricingData.map((plan, index) => (
                  <div key={index} className="plan-value">{plan.requests}</div>
                ))}
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-label">Data Packages</div>
              <div className="plan-values">
                {pricingData.map((plan, index) => (
                  <div key={index} className="plan-value">{plan.storage}</div>
                ))}
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-label">Flexible Cancellation</div>
              <div className="plan-values">
                {pricingData.map((plan, index) => (
                  <div key={index} className="plan-value">Available</div>
                ))}
              </div>
            </div>

            <div className="feature-row pricing-row">
              <div className="feature-label">Monthly Cost</div>
              <div className="plan-values">
                {pricingData.map((plan, index) => (
                  <div key={index} className="plan-value price">{plan.price}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="download-section">
          <div className="download-content">
            <h2>Try it right now</h2>
            <p>Download the AI Ally on the App Store and Google Play and discover the new level of artificial intelligence efficiency and innovative solutions directly on your device.</p>
            <div className="store-buttons">
              <img src= "#" alt="Download on App Store" className="store-button" />
              <img src= "#" alt="Get it on Google Play" className="store-button" />
            </div>
          </div>
          <div className="phone-preview">
            <img src={phoneImage} alt="App Preview" className="phone-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;