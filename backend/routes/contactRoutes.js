// routes/contactRoutes.js

const express = require("express");
const {
  createOrUpdateContact,
  getContact,
  sendContactUsEmail,
  sendCateringEmail,
} = require("../controllers/contactController");
const middleware = require("../middleware/jwtMiddleware");

const contactRouter = express.Router();

// Use a single endpoint for both creating and updating contact
contactRouter.post("/saveContact", middleware, createOrUpdateContact);

// Retrieve contact information
contactRouter.get("/getContact", getContact);

//send email on Contact us
contactRouter.post("/sendContactUsEmail", sendContactUsEmail);

//send email on Contact us
contactRouter.post("/sendCateringEmail", sendCateringEmail);

module.exports = contactRouter;
