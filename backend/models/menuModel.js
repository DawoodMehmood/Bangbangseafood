const mongoose = require('mongoose')

const addonSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });

const categoryAddonSchema = new mongoose.Schema({
    addons: [addonSchema],
    flavours: String,
    spiceLevels: String
  });
  
  const dishSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    addons: [addonSchema],
  });
  
  const menuSchema = new mongoose.Schema({
    categoryName: String,
    CategoryDescription: String,
    categoryAddons: [categoryAddonSchema],
    dishes: [dishSchema],
  }, {
    timestamps: true
});

const Menu = mongoose.model('menu', menuSchema)
module.exports = Menu