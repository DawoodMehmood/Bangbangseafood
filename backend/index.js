const connectDB = require("./config/db");
const colors = require("colors");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const menuRoutes = require("./routes/menuRoutes");
const imageRoutes = require("./routes/imageRoutes");
const miscRoutes = require("./routes/miscRoutes");

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

// CORS to allow requests
app.use(cors());

//middleware
app.use(express.json());

// routes
app.use("/api/contact", contactRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/misc", miscRoutes);

//database connection using mongoose
connectDB()
  .then(() => {
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${PORT}`.bgCyan.white);
    });
  })
  .catch((err) => {
    console.log(err);
  });
