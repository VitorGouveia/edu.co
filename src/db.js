const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./edu.co.db")

db.serialize(function() {
    db.run(
        `CREATE TABLE IF NOT EXISTS courses(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT,
          link TEXT,
          image TEXT
        );
    `)
})

module.exports = db