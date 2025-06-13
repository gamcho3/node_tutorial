const express = require("express");
const router = express.Router();
const Post = require("../models/postSchema");
const User = require("../models/userSchema");
router
  .route("/")
  .get(async (req, res) => {
    try {
      const posts = await Post.find().populate("user");
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, content, tags = [], userId } = req.body;
      const post = await Post.create({ title, content, tags, user: userId });
      await User.findByIdAndUpdate(userId, { $push: { posts: post._id } });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
