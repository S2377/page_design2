import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come across such accuracy before",
      name: "Craig Jordan",
      position: "CEO, Aveva",
      bgColor: "#E9FFE7",
      avatar: "/api/placeholder/40/40"
    },
    {
      quote: "With the help of AI Ally, my work has become much easier and efficient. It provides quick and accurate answers to any questions I come across",
      name: "David Smith",
      position: "Head of HR, Instill",
      bgColor: "#F1E9FF",
      avatar: "/api/placeholder/40/40"
    },
    {
      quote: "I love how AI Ally personalizes to my needs and offers recommendations and solutions based on my preferences and behaviors",
      name: "Marilyn Long",
      position: "UX Designer, Cyber Unit",
      bgColor: "#E9F9FF",
      avatar: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <div className="header-descriptions">
        <h2>Testimonials</h2> 
        </div>
        <div className="header-descriptions">
        <p>Don't just take our word for it – hear from our satisfied clients who have experienced the transformative impact of our AI text tool.</p>
        </div>
        <div className="header-descriptions"><p>Learn how this powerful tool has revolutionized their work and accelerated their success.</p></div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card"
            style={{ backgroundColor: testimonial.bgColor }}
          >
            <p className="quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="author-avatar"
              />
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;