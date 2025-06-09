// express 모듈을 사용한 방법

const express = require("express");
// 파일 경로 처리
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World</h1>");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// 정적 파일 제공
app.use(express.static("public"));

const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
