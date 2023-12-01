// controllers/bannerController.js

const Banner = require("../models/bannerModel");

const createOrUpdateBanner = async (req, res) => {
  try {
    // Validate the incoming data
    const { line1, line2 } = req.body;

    if (!line1 || !line2) {
      return res.status(400).json({ error: "Text lines are required." });
    }

    // Use findOneAndUpdate to update or create a contact
    const updatedContact = await Banner.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });

    res.json({
      message: "Banner updated or created successfully.",
      contact: updatedContact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBanner = async (req, res) => {
  try {
    const contact = await Banner.findOne();
    res.json(contact || {}); // Return an empty object if no contact is found
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createOrUpdateBanner,
  getBanner,
};
