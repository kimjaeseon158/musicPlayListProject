const express = require("express");
const app = express();
const port = 5111;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log("서버 실행중");
})