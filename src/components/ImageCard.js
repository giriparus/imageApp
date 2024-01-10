// src/components/ImageCard.js
import React from 'react';
import '../styles/ImageCard.css'; // Import styles

const ImageCard = ({ imageUrl, imageName }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={imageName} />
      <div className="image-details">
        <h3>{imageName}</h3>
      </div>
    </div>
  );
};

export default ImageCard;
