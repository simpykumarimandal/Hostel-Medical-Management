const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Booking = require("../models/Booking");
const Ambulance = require("../models/Ambulance");
const AutoDriver = require("../models/AutoDriver");

const STATUS_OPTIONS = [
  "pending",
  "accepted",
  "dispatched",
  "completed",
  "cancelled",
];

// Create new booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();

    // If ambulance is assigned, update its status
    if (req.body.ambulanceId) {
      await Ambulance.findByIdAndUpdate(req.body.ambulanceId, {
        status: "busy",
        lastUpdated: new Date(),
      });
    }

    // If auto driver is assigned, update its status
    if (req.body.autoDriverId) {
      await AutoDriver.findByIdAndUpdate(req.body.autoDriverId, {
        status: "busy",
      });
    }

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("ambulanceId")
      .populate("autoDriverId")
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update booking status
router.patch("/:id/status", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid booking id" });
    }
    if (!STATUS_OPTIONS.includes(req.body.status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        updatedAt: new Date(),
      },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // If booking is completed, make ambulance/auto available again
    if (req.body.status === "completed") {
      if (booking.ambulanceId) {
        await Ambulance.findByIdAndUpdate(booking.ambulanceId, {
          status: "available",
          lastUpdated: new Date(),
        });
      }
      if (booking.autoDriverId) {
        await AutoDriver.findByIdAndUpdate(booking.autoDriverId, {
          status: "available",
        });
      }
    }

    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
