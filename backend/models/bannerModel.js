const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  line1: {
    type: String,
  },
  line2: {
    type: String,
  },
});

const Banner = mongoose.model("banner", bannerSchema);

module.exports = Banner;
