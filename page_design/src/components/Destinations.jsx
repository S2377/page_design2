import React from 'react';
import './Destinations.css';
import student from '../assets/student.jpg'
import professional from '../assets/professional.jpeg'
import pro from '../assets/pro.jpg'

const Destinations = () => {
  const destinations = [
    {
      title: 'Students',
      description: 'AI Ally can assist in research, provide learning materials, and answer questions',
      image: student,
    },
    {
      title: 'Professionals',
      description: 'AI Ally can provide quick access to relevant information and offer data analysis insights',
      image: pro,
    },
    {
      title: 'Writers',
      description: 'AI Ally can help writers by generating ideas, suggesting improvements in writing style',
      image: student,
    }
  ];

  return (
    <div className="destinations-container">
      <h1>Different destinations</h1>
      
      <div className="destinations-header">
        <p className="header-text">
          We explore the diverse ways in which this technology can revolutionize work across
          various industries and fields.
        </p>
        <p className="header-text">
          Discover how AI can streamline processes and elevate your work to new heights.
        </p>
        <p className="header-text">
          Discover all applications ↗
        </p>
      </div>

      <div className="cards-container">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <div className="card-image-container">
              <img src={destination.image} alt={destination.title} />
              <button className="try-now-button">Try it now</button>
            </div>
            <h2>{destination.title}</h2>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>

      <button className="more-destinations-button">
        And more than 50 other destinations
      </button>
    </div>
  );
};

export default Destinations;