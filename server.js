// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/image-gallery', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the image model
const imageSchema = new mongoose.Schema({
  imageUrl: String,
  imageName: String,
});

// Create a model based on the schema
const Image = mongoose.model('Image', imageSchema);

// Fetch image data from the database
app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
