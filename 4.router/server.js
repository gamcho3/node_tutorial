// express 모듈을 사용한 방법

const express = require("express");

const app = express();

const port = 3000;

// 미들웨어 설정
// 미들웨어란 : 요청과 응답사이 중간에 실행하는 함수
app.use(express.json());

// express 라우터 사용
// 라우팅을 한 파일이 아닌 여러파일에 분리하여 관리하는 방법

// 라우터 파일 불러오기
const userRouter = require("./api/user");

//라우터 경로 설정 및 등록
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
