// controllers/contactController.js

const Contact = require('../models/contactModel');

const createOrUpdateContact = async (req, res) => {
    try {
      // Validate the incoming data
      const { address, email, number } = req.body;
  
      if (!address || !email || !number) {
        return res.status(400).json({ error: 'Address, email, and number are required.' });
      }
  
      // Use findOneAndUpdate to update or create a contact
      const updatedContact = await Contact.findOneAndUpdate(
        {},
        req.body,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
  
      res.json({ message: 'Contact updated or created successfully.', contact: updatedContact });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact || {}); // Return an empty object if no contact is found
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createOrUpdateContact,
  getContact,
};
