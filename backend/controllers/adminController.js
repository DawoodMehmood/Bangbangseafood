const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Route to create or update an admin user - should be protected or limited
const adminSignUp = async (req, res) => {
  if (process.env.ALLOW_ADMIN_SETUP !== "true") {
    return res.status(403).send("Admin setup is not allowed.");
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = await Admin.findOneAndUpdate(
      { username },
      { username, password: hashedPassword },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res
      .status(200)
      .json({ message: "Admin account has been set up successfully.", admin });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error setting up admin account.");
  }
};

module.exports = {
  adminLogin,
  adminSignUp,
};
