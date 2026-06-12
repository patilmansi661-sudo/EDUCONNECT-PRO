const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/request", async (req, res) => {
  try {

    const { senderId, receiverId } = req.body;

    const receiver = await User.findById(receiverId);

    receiver.requests.push(senderId);

    await receiver.save();

    res.json({
      message: "Connection request sent"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.post("/accept", async (req, res) => {

  try {

    const { senderId, receiverId } = req.body;

    const sender = await User.findById(senderId);

    const receiver = await User.findById(receiverId);

    sender.connections.push(receiverId);

    receiver.connections.push(senderId);

    receiver.requests =
      receiver.requests.filter(
        id => id.toString() !== senderId
      );

    await sender.save();
    await receiver.save();

    res.json({
      message: "Connection accepted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/:id", async (req, res) => {

  try {

    const user = await User.findById(req.params.id)
      .populate("connections");

    res.json(user.connections);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;