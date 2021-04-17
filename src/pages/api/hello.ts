import { db } from "./sqlite3"

export default (req, res) => {
  db.run("SELECT * FROM users")
  return res.json("database created")
}