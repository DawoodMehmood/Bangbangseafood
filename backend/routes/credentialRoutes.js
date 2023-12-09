// routes/credentialRoutes.js

const express = require("express");
const {
  createOrUpdateCredential,
  getCredential,
} = require("../controllers/credentialController");

const credentialRouter = express.Router();

credentialRouter.post("/saveCredential", createOrUpdateCredential);

credentialRouter.get("/getCredential", getCredential);

module.exports = credentialRouter;
