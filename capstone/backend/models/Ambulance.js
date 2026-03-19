const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  driver: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "busy", "maintenance"],
    default: "available",
  },
  location: {
    type: String,
    required: true,
  },
  eta: {
    type: String,
    default: "5 min",
  },
  type: {
    type: String,
    enum: ["Basic Life Support", "Advanced Life Support", "Critical Care"],
    default: "Basic Life Support",
  },
  coordinates: {
    lat: Number,
    lng: Number,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ambulance", ambulanceSchema);
