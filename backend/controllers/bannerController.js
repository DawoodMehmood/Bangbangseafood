// controllers/bannerController.js

const Banner = require("../models/bannerModel");

const createOrUpdateBanner = async (req, res) => {
  try {
    // Use findOneAndUpdate to update or create a contact
    const updatedData = await Banner.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });

    res.json({
      message: "Banner updated or created successfully.",
      contact: updatedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBanner = async (req, res) => {
  try {
    const data = await Banner.findOne();
    res.json(data || {}); // Return an empty object if no contact is found
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createOrUpdateBanner,
  getBanner,
};
