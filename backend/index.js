const connectDB = require("./config/db");
const colors = require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const menuRoutes = require("./routes/menuRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const credentialRoutes = require("./routes/credentialRoutes");

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

// CORS to allow requests
app.use(cors());

// Parse application/json requests
app.use(bodyParser.json({ limit: "50mb" }));

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//middleware
app.use(express.json());

// routes
app.use("/api/contact", contactRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/credential", credentialRoutes);

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
