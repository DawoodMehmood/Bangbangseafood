// routes/imageRoutes.js

const express = require('express');
const upload = require('../imageHandler/upload');
const Menu = require('../models/menuModel'); 

const imageRouter = express.Router();

imageRouter.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Please upload an image.' });
    }
    const imagePath = req.file.path; // File path where the image is saved

    // Save the image path to MongoDB using your Menu model
    const newMenu = new Menu({
      image: imagePath,
    });

    await newMenu.save(); // Save the image path in the database

    res.status(200).json({ imagePath: imagePath });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


// GET route to fetch image paths
imageRouter.get('/retrieve', async (req, res) => {
    try {
      const menuItems = await Menu.find({}, 'image'); // Retrieve only the 'image' field
  
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });


module.exports = imageRouter;
