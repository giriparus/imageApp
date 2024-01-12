// models/ImageModel.js
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imageName: String,
  },
  { collection: "Images" },
);

const ImageModel = mongoose.model("Images", imageSchema);

module.exports = ImageModel;
