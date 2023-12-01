const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
  }
);

const Menu = mongoose.model("menu", menuSchema);
module.exports = Menu;
