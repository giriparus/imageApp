// server.js
const express = require("express");
const mongoose = require("mongoose");
const Image = require("./models/ImageModel");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/image-gallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

// Fetch image data from the database
app.get("/api/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete(`/api/images/:imageName`, async (req, res) => {
  const { imageName } = req.params;
  try {
    const deletedImage = await Image.findOneAndDelete({ imageName });
    if (!deletedImage) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.json(deletedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
