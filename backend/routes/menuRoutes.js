// menuRoutes.js
const express = require("express");
const {
  createGalleryImage,
  getAllGalleryImages,
  deleteGalleryImageById,
} = require("../controllers/menuController");
const middleware = require("../middleware/jwtMiddleware");
const menuRouter = express.Router();

menuRouter.post("/newImage", middleware, createGalleryImage);
menuRouter.get("/getAllImages", getAllGalleryImages);
menuRouter.delete("/deleteImage/:id", middleware, deleteGalleryImageById);

module.exports = menuRouter;
