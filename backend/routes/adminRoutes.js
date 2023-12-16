const express = require("express");
const { adminLogin, adminSignUp } = require("../controllers/adminController");
const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.post("/signup", adminSignUp);

module.exports = adminRouter;
