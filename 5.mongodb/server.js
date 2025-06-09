// 몽고DB
const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const app = express();
const uri =
  "mongodb+srv://user:1234@cluster0.u1zrmt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

// client 인스턴스 생성
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("test").command({ ping: 1 });
    console.log("몽고DB 연결 성공");
  } catch (error) {
    console.log("몽고DB 연결 실패");
  } finally {
    await client.close();
  }
}

// 전체 데이터 조회
app.get("/user", async (req, res) => {
  try {
    // 몽고DB 연결
    await client.connect();
    // DB연결
    const db = client.db("test");
    // Document 객체를 배열로 반환
    const users = await db.collection("user").find().toArray();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 데이터 삽입
app.post("/user", async (req, res) => {
  console.log(req.body);
  const { name, age } = req.body;
  try {
    await client.connect();
    const result = await client
      .db("test")
      .collection("user")
      .insertOne({ name, age });
    console.log(result);
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("서버연결");
  // 몽고DB 연결확인
  connectDB();
});
