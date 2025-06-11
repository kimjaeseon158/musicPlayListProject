const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// DB 경로를 정확하게 지정 (music.db는 파일명일 뿐이야)
const dbPath = path.join(__dirname, '../musicDB/music.db');
const db = new sqlite3.Database(dbPath); // DB 인스턴스 생성

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
    no INTEGER PRIMARY KEY AUTOINCREMENT, 
    user_id TEXT UNIQUE,                 
    password TEXT,
    name TEXT,
    email TEXT,
    phoneNumber TEXT
    )
  `, (err) => {
    if (err) {
      console.error('테이블 생성 실패:', err.message);
    } else {
      console.log('테이블 생성 완료');
    }
  });
});

module.exports = db;