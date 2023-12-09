// routes/bannerRoutes.js

const express = require("express");
const {
  createOrUpdateBanner,
  getBanner,
} = require("../controllers/bannerController");

const bannerRouter = express.Router();

bannerRouter.post("/saveBanner", createOrUpdateBanner);

bannerRouter.get("/getBanner", getBanner);

module.exports = bannerRouter;
