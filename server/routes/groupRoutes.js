const express = require("express");
const router = express.Router();

const Group = require("../models/Group");
const authMiddleware = require("../middleware/authMiddleware");
router.post("/create", authMiddleware, async (req, res) => {
  try {

    const { name, description } = req.body;

    const group = new Group({
      name,
      description
    });

    await group.save();

    res.status(201).json(group);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/", async (req, res) => {
  try {

    const groups = await Group.find();

    res.json(groups);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/:id", async (req, res) => {
  try {

    const group = await Group.findById(req.params.id);

    res.json(group);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.put("/join/:groupId/:userId", async (req, res) => {

  try {

    const group = await Group.findById(req.params.groupId);

    if (!group.members.includes(req.params.userId)) {

      group.members.push(req.params.userId);

      await group.save();
    }

    res.json(group);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.put("/leave/:groupId/:userId", async (req, res) => {

  try {

    const group = await Group.findById(req.params.groupId);

    group.members = group.members.filter(
      member => member.toString() !== req.params.userId
    );

    await group.save();

    res.json(group);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;