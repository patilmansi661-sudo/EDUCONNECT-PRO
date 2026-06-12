const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.post("/create", authMiddleware,  async (req, res) => {

  try {

    const { user, content } = req.body;

    const post = new Post({
      user,
      content
    });

    await post.save();

    res.status(201).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const posts = await Post.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.put("/like/:id", async (req, res) => {

  try {

    const { userId } = req.body;

    const post = await Post.findById(req.params.id);

    post.likes.push(userId);

    await post.save();

    res.json({
      message: "Post liked"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.put("/comment/:id", async (req, res) => {

  try {

    const { userId, text } = req.body;

    const post = await Post.findById(req.params.id);

    post.comments.push({
      user: userId,
      text
    });

    await post.save();

    res.json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/:id", async (req, res) => {

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

module.exports = router;