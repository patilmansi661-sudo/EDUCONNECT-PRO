const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Test Route
router.get("/", (req, res) => {
  res.json({
    message: "Profile Route Working"
  });
});

// Update Profile
router.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedUser);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;