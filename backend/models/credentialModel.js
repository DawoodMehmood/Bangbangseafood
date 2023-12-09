const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  key: {
    type: String,
    required: true,
  },
});

const Credential = mongoose.model("credential", credentialSchema);

module.exports = Credential;
