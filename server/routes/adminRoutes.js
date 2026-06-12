const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");
const Job = require("../models/Job");

router.get("/users", async (req, res) => {

  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/users/:id", async (req, res) => {

  try {

    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/posts", async (req, res) => {

  try {

    const posts = await Post.find();

    res.json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/posts/:id", async (req, res) => {

  try {

    await Post.findByIdAndDelete(req.params.id);

    res.json({
      message: "Post deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/jobs", async (req, res) => {

  try {

    const jobs = await Job.find();

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/jobs/:id", async (req, res) => {

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