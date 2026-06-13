const express = require("express");
const router = express.Router();

const Job = require("../models/Job");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware,  async (req, res) => {
  try {

    const job = new Job(req.body);

    await job.save();

    res.status(201).json(job);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/", async (req, res) => {
  try {

    const jobs = await Job.find()
      .sort({ createdAt: -1 });

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.put("/apply/:id", async (req, res) => {

  try {

    const { userId } = req.body;

    const job = await Job.findById(req.params.id);

    job.applicants.push(userId);

    await job.save();

    res.json({
      message: "Application submitted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/:id", async (req, res) => {

  try {

    const job = await Job.findById(req.params.id)
      .populate("applicants", "name email");

    res.json(job);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;