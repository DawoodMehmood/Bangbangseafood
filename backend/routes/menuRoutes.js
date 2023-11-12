// routes/contactRoutes.js

const express = require("express");
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  addDish,
  updateDish,
  deleteDish,
} = require("../controllers/menuController");

const menuRouter = express.Router();

// Create a new category with dishes
menuRouter.post("/categories", createCategory);

// Get all categories and their dishes
menuRouter.get("/categories", getAllCategories);

// Update a category and its dishes
menuRouter.put("/categories/:categoryId", updateCategory);

// Delete a category
menuRouter.delete("/categories/:categoryId", deleteCategory);



// Add a new dish to an existing category
menuRouter.post('/categories/:categoryId/dishes', addDish);

// Update the details of a specific dish in a category
menuRouter.put("/categories/:categoryId/dishes/:dishId", updateDish);

// Delete a specific dish in a category
menuRouter.delete("/categories/:categoryId/dishes/:dishId", deleteDish);

module.exports = menuRouter;
