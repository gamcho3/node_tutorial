const express = require("express");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `name : ${name}, age : ${age}` });
});

// 모듈 내보내기
module.exports = router;
