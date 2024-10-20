import React from 'react';
import './ImageContent.css'; // Importing the CSS for styling
import content from '../assets/content.png'

const ImageContent = ({ imageUrl}) => {
  return (
    <div className="image-content">
      <img src={content}   alt="content" className="content-image" />
    </div>
  );
};

export default ImageContent;
