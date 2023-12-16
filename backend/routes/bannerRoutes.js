// routes/bannerRoutes.js

const express = require("express");
const {
  createOrUpdateBanner,
  getBanner,
} = require("../controllers/bannerController");
const middleware = require("../middleware/jwtMiddleware");

const bannerRouter = express.Router();

bannerRouter.post("/saveBanner", middleware, createOrUpdateBanner);

bannerRouter.get("/getBanner", getBanner);

module.exports = bannerRouter;
