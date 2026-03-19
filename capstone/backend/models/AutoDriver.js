const mongoose = require("mongoose");

const autoDriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  eta: {
    type: String,
    default: "5 min",
  },
  status: {
    type: String,
    enum: ["available", "busy"],
    default: "available",
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 4.5,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  coordinates: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model("AutoDriver", autoDriverSchema);
