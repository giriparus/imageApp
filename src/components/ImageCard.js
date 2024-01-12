// src/components/ImageCard.js
import React from "react";
import "../styles/ImageCard.css"; // Import styles

const ImageCard = ({ imageUrl, imageName, onDelete }) => {
  const handleDelete = () => {
    onDelete(imageName);
  };

  return (
    <div className="image-card">
      <img src={require(`../images/${imageName}.jpeg`)} alt={imageName} />
      <div className="image-details">
        <h3>{imageName}</h3>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ImageCard;
