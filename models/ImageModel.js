// models/ImageModel.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageUrl: String,
  imageName: String,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
