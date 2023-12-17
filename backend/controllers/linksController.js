// controllers/linksController.js

const Links = require("../models/linksModel");

const createOrUpdateLinks = async (req, res) => {
  try {
    // Use findOneAndUpdate to update or create a contact
    const updatedData = await Links.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });

    res.json({
      message: "Links updated or created successfully.",
      contact: updatedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLinks = async (req, res) => {
  try {
    const data = await Links.findOne();
    res.json(data || {}); // Return an empty object if no contact is found
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createOrUpdateLinks,
  getLinks,
};
