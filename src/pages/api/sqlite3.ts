import { Database } from "sqlite3"

const db = new Database("./src/app.db")

db.serialize(() => {
  function User() {
    const query = `
      CREATE TABLE IF NOT EXISTS users(
        id TEXT,
        name TEXT
      ); 
    `

    db.run(query)
  }

  User()
})

export { db }