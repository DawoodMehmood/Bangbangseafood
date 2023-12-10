// menuModel.js
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  sequenceNo: {
    type: Number,
    required: true,
  },
});

const MenuImages = mongoose.model("menuImages", menuSchema);

module.exports = MenuImages;
