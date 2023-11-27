// controllers/contactController.js

const Contact = require("../models/contactModel");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

const createOrUpdateContact = async (req, res) => {
  try {
    // Validate the incoming data
    const { address, email, number } = req.body;

    if (!address || !email || !number) {
      return res
        .status(400)
        .json({ error: "Address, email, and number are required." });
    }

    // Use findOneAndUpdate to update or create a contact
    const updatedContact = await Contact.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });

    res.json({
      message: "Contact updated or created successfully.",
      contact: updatedContact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact || {}); // Return an empty object if no contact is found
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//----------------------------------EMAIL SETTINGS------------------------------------------------------------

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service here (e.g., Gmail, Outlook, etc.)
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email
    pass: process.env.EMAIL_PASS, // Replace with your password
  },
});

const emailSender = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

const sendContactUsEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Construct mailOptions
    const mailToMyself = {
      from: "dawoodmehmood52222@gmail.com",
      to: "dawoodmehmood52222@gmail.com",
      subject: `New Contact Us Message`,
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const mailToCustomer = {
      from: "dawoodmehmood52222@gmail.com",
      to: email,
      subject: `Thank you for contacting us!`,
      text: `Dear Customer,\n\nWe have received your message. We'll get back to you soon.\n\nBest Regards,\nBangBangSeaFood\n3897 N Haverhill Rd, \nWest Palm Beach, Fl 33417`,
    };

    // sending email to myself
    await emailSender(mailToMyself);

    // sending email to customer
    await emailSender(mailToCustomer);

    res.status(200).send("Emails sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

const sendCateringEmail = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, persons, date, message } =
      req.body;

    // Construct mailOptions
    const mailToMyself = {
      from: "dawoodmehmood52222@gmail.com",
      to: "dawoodmehmood52222@gmail.com",
      subject: `Catering Form Submission - ${firstName} ${lastName}`,
      html: `
        <h2>Catering Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Number of Persons:</strong> ${persons}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const mailToCustomer = {
      from: "dawoodmehmood52222@gmail.com",
      to: email,
      subject: `Thank you for quote request!`,
      html: `
        <p><strong>Dear Customer,</strong></p>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p>Here are the details you provided:</p>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>Number of Persons:</strong> ${persons}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Best Regards,<br/>BangBangSeaFood<br/>3897 N Haverhill Rd, West Palm Beach, Fl 33417</p>
      `,
    };

    // sending email to myself
    await emailSender(mailToMyself);

    // sending email to customer
    await emailSender(mailToCustomer);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

module.exports = {
  createOrUpdateContact,
  getContact,
  sendContactUsEmail,
  sendCateringEmail,
};
