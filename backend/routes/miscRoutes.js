// routes/contactRoutes.js

const express = require('express');
const {
  createOrUpdateBanner,
  getBanner,
} = require('../controllers/bannerController');

const miscRouter = express.Router();

miscRouter.post('/saveBanner', createOrUpdateBanner);

miscRouter.get('/getBanner', getBanner);


module.exports = miscRouter;
