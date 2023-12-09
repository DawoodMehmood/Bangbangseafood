// controllers/credentialController.js

const Credential = require("../models/credentialModel");

const createOrUpdateCredential = async (req, res) => {
  try {
    // Validate the incoming data
    const { email, key } = req.body;

    if (!email || !key) {
      return res.status(400).json({ error: "Credentials are required." });
    }

    // Use findOneAndUpdate to update or create a contact
    const updatedData = await Credential.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });

    res.json({
      message: "Credentials updated or created successfully.",
      credential: updatedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCredential = async (req, res) => {
  try {
    const data = await Credential.findOne();
    res.json(data || {}); // Return an empty object if no contact is found
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createOrUpdateCredential,
  getCredential,
};
