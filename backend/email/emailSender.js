// emailSender.js
const dotenv = require('dotenv')
const nodemailer = require('nodemailer');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service here (e.g., Gmail, Outlook, etc.)
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email
    pass: process.env.EMAIL_PASS, // Replace with your password
  },
});

const emailSender = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

module.exports = { emailSender };
