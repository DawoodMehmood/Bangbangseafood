// routes/contactRoutes.js

const express = require('express');
const {
  createOrUpdateContact,
  getContact,
} = require('../controllers/contactController');

const contactRouter = express.Router();

// Use a single endpoint for both creating and updating contact
contactRouter.post('/saveContact', createOrUpdateContact);

// Retrieve contact information
contactRouter.get('/getContact', getContact);

module.exports = contactRouter;
