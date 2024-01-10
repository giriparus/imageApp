// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    // For demonstration purposes, assuming a local JSON file with image data
    fetch('http://localhost:5000/api/image')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Update filtered images when searchQuery changes
    setFilteredImages(
      images.filter((image) =>
        image.imageName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, images]);

  const handleSearch = () => {
    // Perform search when the button is clicked
    // You can also add additional logic here if needed
    setFilteredImages(
      images.filter((image) =>
        image.imageName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <div className="image-gallery">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredImages.map((image) => (
        <ImageCard key={image.id} imageUrl={image.imageUrl} imageName={image.imageName} />
      ))}
    </div>
  );
};

export default ImageGallery;
