const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientContact: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  emergencyType: {
    type: String,
    enum: ["medical", "accident", "critical", "other"],
    required: true,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  details: String,
  ambulanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ambulance",
  },
  autoDriverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AutoDriver",
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "dispatched", "completed", "cancelled"],
    default: "pending",
  },
  assignedTo: {
    type: String, // 'ambulance' or 'auto'
    enum: ["ambulance", "auto"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
