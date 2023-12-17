// routes/linksRoutes.js

const express = require("express");
const {
  createOrUpdateLinks,
  getLinks,
} = require("../controllers/linksController");
const middleware = require("../middleware/jwtMiddleware");

const linksRouter = express.Router();

linksRouter.post("/saveLinks", middleware, createOrUpdateLinks);

linksRouter.get("/getLinks", getLinks);

module.exports = linksRouter;
