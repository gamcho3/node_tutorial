// Mongoose 모듈 사용
// MongoDB

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userRouter = require("./controllers/user");
const postRouter = require("./controllers/post");

const uri =
  "mongodb+srv://user:1234@cluster0.u1zrmt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => console.log("몽고DB 연결 성공"))
  .catch((err) => console.log(err.message));

app.use(express.json());

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
  console.log("서버 연결");
});
