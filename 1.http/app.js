// 내장 http 모듈을 사용한 방법
// node app.js로 실행
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello World</h1></body>");
  res.write("</html>");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
