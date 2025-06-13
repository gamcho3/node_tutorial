const express = require("express");
const router = express.Router();
// 스키마 가져오기
const User = require("../models/userSchema");

// /user 경로 라우팅

router
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, age } = req.body;
      const user = await User.create({ name, age });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//해당유저의 게시글 가져오기
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // 참조되어있는 컬렉션의 문서를 자동으로 불러오는 기능
    const user = await User.findById(id).populate("posts");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
