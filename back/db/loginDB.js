const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../musicDB/music.db');

module.exports = db;