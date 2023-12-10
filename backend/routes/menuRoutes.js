// menuRoutes.js
const express = require("express");
const {
  createGalleryImage,
  getAllGalleryImages,
  deleteGalleryImageById,
} = require("../controllers/menuController");

const menuRouter = express.Router();

menuRouter.post("/newImage", createGalleryImage);
menuRouter.get("/getAllImages", getAllGalleryImages);
menuRouter.delete("/deleteImage/:id", deleteGalleryImageById);

module.exports = menuRouter;
