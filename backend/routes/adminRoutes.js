const express = require("express");
const {
  adminLogin,
  adminSignUp,
  adminChangePassword,
} = require("../controllers/adminController");
const adminRouter = express.Router();
const middleware = require("../middleware/jwtMiddleware");

adminRouter.post("/login", adminLogin);
adminRouter.post("/signup", adminSignUp);
adminRouter.post("/change-password", middleware, adminChangePassword);

module.exports = adminRouter;
