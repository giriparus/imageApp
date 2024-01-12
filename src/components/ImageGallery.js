// src/components/ImageGallery.js
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import "../styles/ImageGallery.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Update filtered images when searchQuery changes
    setFilteredImages(
      images.filter((image) =>
        image.imageName.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery, images]);

  const handleDelete = (imageName) => {
    // Make a DELETE request to your backend API to delete the image
    fetch(`http://localhost:5000/api/images/${imageName}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // If the delete request is successful, update the state
          setImages((prevImages) =>
            prevImages.filter((image) => image.imageName !== imageName),
          );
        } else {
          console.error("Failed to delete image");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleSearch = () => {
    // Perform search when the button is clicked
    // You can also add additional logic here if needed
    setFilteredImages(
      images.filter((image) =>
        image.imageName.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
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
          className="input-search"
        />
      </div>
      <div className="grid-container">
        {filteredImages.map((image) => (
          <ImageCard
            key={image.id}
            imageUrl={image.imageUrl}
            imageName={image.imageName}
            onDelete={handleDelete} // Pass the handleDelete function
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
