const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
  clover: {
    type: String,
  },
  doordash: {
    type: String,
  },
  ubereats: {
    type: String,
  },
  grubhub: {
    type: String,
  },
  postmate: {
    type: String,
  },
});

const Links = mongoose.model("links", linksSchema);

module.exports = Links;
