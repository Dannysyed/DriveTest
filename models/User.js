// models/User.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const generateRandomLicenseNumber = () => {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};
const userSchema = new Schema({
  username: String,
  password: String, // Store the encrypted password
  userType: {
    type: String,
    enum: ["Driver", "Examiner", "Admin"],
  },
  FirstName: {
    type: String,
    default: "default",
  },
  lastname: {
    type: String,
    default: "default",
  },
  Age: { type: String, default: 0 },
  LicenseNumber: {
    type: String,
    default: generateRandomLicenseNumber,
    unique: false,
  },
  CarDetails: {
    make: { type: String, default: "default" },
    model: { type: String, default: "default" },
    year: { type: String, default: 0 },
    platNumber: { type: String, default: "default" },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
