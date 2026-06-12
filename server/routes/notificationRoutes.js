const express = require("express");
const router = express.Router();

const Notification = require("../models/Notification");

router.post("/create", async (req, res) => {

  try {

    const { user, message } = req.body;

    const notification =
      new Notification({
        user,
        message
      });

    await notification.save();

    res.status(201).json(notification);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/:userId", async (req, res) => {

  try {

    const notifications =
      await Notification.find({
        user: req.params.userId
      }).sort({ createdAt: -1 });

    res.json(notifications);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.put("/read/:id", async (req, res) => {

  try {

    const notification =
      await Notification.findById(req.params.id);

    notification.read = true;

    await notification.save();

    res.json(notification);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Notification.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Notification deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;