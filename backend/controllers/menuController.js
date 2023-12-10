// menuController.js
const MenuImages = require("../models/menuModel");

// Create a new gallery image
const createGalleryImage = async (req, res) => {
  try {
    const { sequenceNo, image } = req.body;
    const newGalleryImage = await MenuImages.create({
      sequenceNo,
      image,
    });
    res
      .status(201)
      .json({ message: "Gallery image created", data: newGalleryImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all gallery images
const getAllGalleryImages = async (req, res) => {
  try {
    const galleryImages = await MenuImages.find();
    res.status(200).json(galleryImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a gallery image by ID
const deleteGalleryImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGalleryImage = await MenuImages.findByIdAndDelete(id);
    if (!deletedGalleryImage) {
      return res.status(404).json({ message: "Gallery image not found" });
    }
    res
      .status(200)
      .json({ message: "Gallery image deleted", data: deletedGalleryImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createGalleryImage,
  getAllGalleryImages,
  deleteGalleryImageById,
};
