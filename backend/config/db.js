// import mongoose from "mongoose";
// import colors from "colors"
// import dotenv from "dotenv"

const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in running MongoDB ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
