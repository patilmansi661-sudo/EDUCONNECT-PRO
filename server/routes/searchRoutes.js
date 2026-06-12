const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Job = require("../models/Job");

router.get("/users/name/:name", async (req, res) => {
  try {

    const users = await User.find({
      name: {
        $regex: req.params.name,
        $options: "i"
      }
    });

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/users/college/:college", async (req, res) => {
  try {

    const users = await User.find({
      college: {
        $regex: req.params.college,
        $options: "i"
      }
    });

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/users/skill/:skill", async (req, res) => {
  try {

    const users = await User.find({
      skills: {
        $regex: req.params.skill,
        $options: "i"
      }
    });

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/jobs/title/:title", async (req, res) => {
  try {

    const jobs = await Job.find({
      title: {
        $regex: req.params.title,
        $options: "i"
      }
    });

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/jobs/company/:company", async (req, res) => {
  try {

    const jobs = await Job.find({
      company: {
        $regex: req.params.company,
        $options: "i"
      }
    });

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/jobs/location/:location", async (req, res) => {
  try {

    const jobs = await Job.find({
      location: {
        $regex: req.params.location,
        $options: "i"
      }
    });

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;