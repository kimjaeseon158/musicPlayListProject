const db = require('../musicDB/music.db');

const insertUser = (name, email, callback) => {
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.run(sql, [name, email], function(err) {
    callback(err, this?.lastID);
  });
};

const getAllUsers = (callback) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = { insertUser, getAllUsers };