const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Ambulance = require("../models/Ambulance");

const STATUS_OPTIONS = ["available", "busy", "maintenance"];

// Get all ambulances
router.get("/", async (req, res) => {
  try {
    const ambulances = await Ambulance.find();
    res.json(ambulances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get available ambulances
router.get("/available", async (req, res) => {
  try {
    const ambulances = await Ambulance.find({ status: "available" });
    res.json(ambulances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update ambulance status
router.patch("/:id/status", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ambulance id" });
    }
    if (!STATUS_OPTIONS.includes(req.body.status)) {
      return res
        .status(400)
        .json({ message: "Invalid status value" });
    }
    const ambulance = await Ambulance.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        lastUpdated: new Date(),
      },
      { new: true }
    );
    if (!ambulance) {
      return res.status(404).json({ message: "Ambulance not found" });
    }
    res.json(ambulance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update ambulance location
router.patch("/:id/location", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ambulance id" });
    }
    const ambulance = await Ambulance.findByIdAndUpdate(
      req.params.id,
      {
        location: req.body.location,
        coordinates: req.body.coordinates,
        lastUpdated: new Date(),
      },
      { new: true }
    );
    if (!ambulance) {
      return res.status(404).json({ message: "Ambulance not found" });
    }
    res.json(ambulance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
