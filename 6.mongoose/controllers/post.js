const express = require("express");
const router = express.Router();
const Post = require("../models/postSchema");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, content, tags = [] } = req.body;
      const post = await Post.create({ title, content, tags });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
