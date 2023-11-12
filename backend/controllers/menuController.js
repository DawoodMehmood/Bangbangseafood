// controllers/menuController.js

const Menu = require("../models/menuModel");

// Create a new category with dishes
const createCategory = async (req, res) => {
  try {
    const {
      categoryName,
      CategoryDescription,
      categoryNote,
      categoryAddons,
      dishes,
    } = req.body;

    const newCategory = new Menu({
      categoryName,
      CategoryDescription,
      categoryNote,
      categoryAddons,
      dishes,
    });

    await newCategory.save();
    res.status(201).json({ message: "Category created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all categories and their dishes
const getAllCategories = async (req, res) => {
  try {
    const categories = await Menu.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a category and its dishes
const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const {
      categoryName,
      CategoryDescription,
      categoryNote,
      categoryAddons,
      dishes,
    } = req.body;

    const updatedCategory = await Menu.findByIdAndUpdate(
      categoryId,
      {
        categoryName,
        CategoryDescription,
        categoryNote,
        categoryAddons,
        dishes,
      },
      { new: true }
    );

    res.json({
      message: "Category updated successfully.",
      menu: updatedCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    await Menu.findByIdAndDelete(categoryId);
    res.json({ message: "Category deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a new dish to an existing category
const addDish = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const newDish = req.body; // Provide data for the new dish

    const category = await Menu.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    category.dishes.push(newDish);
    await category.save();

    res
      .status(201)
      .json({ message: "Dish added to category successfully.", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update the details of a specific dish in a category
const updateDish = async (req, res) => {
  try {
    const { categoryId, dishId } = req.params;
    const updatedDishData = req.body;

    const category = await Menu.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const dishToUpdate = category.dishes.id(dishId);
    if (!dishToUpdate) {
      return res.status(404).json({ error: "Dish not found in the category" });
    }

    dishToUpdate.set(updatedDishData);
    await category.save();

    res.json({ message: "Dish updated successfully.", dish: dishToUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a specific dish in a category
const deleteDish = async (req, res) => {
  try {
    const { categoryId, dishId } = req.params;

    const category = await Menu.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Find the index of the dish to delete
    const dishIndex = category.dishes.findIndex(
      (dish) => dish._id.toString() === dishId
    );

    if (dishIndex === -1) {
      return res.status(404).json({ error: "Dish not found in the category" });
    }

    // Remove the dish from the array
    category.dishes.splice(dishIndex, 1);

    await category.save();

    res.json({ message: "Dish deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  addDish,
  updateDish,
  deleteDish,
};
