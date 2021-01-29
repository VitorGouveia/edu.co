const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.static(__dirname + "/web" + "/static"))
app.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: app,
    noCache: true
})

app.get("/", (req, res) => {
    db.all(`SELECT * FROM courses`, (err, rows) => {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        const reversedCourses = [...rows].reverse()

        let lastCourses = []
        for(course of reversedCourses) {
            if(lastCourses.lenght < 4) {
                lastCourses.push(course)
            }
        }
        return res.render("index.html", { courses: lastCourses })
    })
})

app.get("/cursos", (req, res) => {
    db.all("SELECT * FROM courses", (err, rows) => {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        return res.render("cursos.html", { courses: [...rows] })
    })
})

app.get("/register", (req, res) => {
    res.render("cadastrar.html")
})

app.post("/register", (req, res) => {
    const { nome, link, image } = req.body
    const query = `
        INSERT INTO courses(
            nome,
            link,
            image
        ) VALUES (?, ?, ?);
    `
    db.all(query, [nome, link, image], (err) => {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        return res.redirect("/cursos")
    })
})

app.listen(process.env.PORT || 3333, () => console.log("http://127.0.0.1:3333 ou http://localhost:3333"))