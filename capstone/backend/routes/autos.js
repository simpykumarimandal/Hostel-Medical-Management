const express = require("express");
const router = express.Router();
const AutoDriver = require("../models/AutoDriver");

// Get all auto drivers
router.get("/", async (req, res) => {
  try {
    const autos = await AutoDriver.find();
    res.json(autos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get available auto drivers
router.get("/available", async (req, res) => {
  try {
    const autos = await AutoDriver.find({ status: "available" });
    res.json(autos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
