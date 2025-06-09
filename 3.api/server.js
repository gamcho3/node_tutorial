// express 모듈을 사용한 방법

const express = require("express");

const app = express();

const port = 3000;

// 미들웨어 설정
// 미들웨어란 : 요청과 응답사이 중간에 실행하는 함수
app.use(express.json());

// 라우팅 기본 메서드

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// 쿼리 파라미터 사용
app.get("/user", (req, res) => {
  const { name, age } = req.query;
  res.json({ message: `name : ${name}, age : ${age}` });
});

// url 파라미터 사용
app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `userId : ${id}` });
});

app.post("/user", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `name : ${name}, age : ${age}` });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
