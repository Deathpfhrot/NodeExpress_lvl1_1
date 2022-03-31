const express = require("express")
const PORT = 9000

// npm -v
// npm init //npm init -y
// npm install express

const app = express()

app.use((req, _, next) => {
    console.log("neue request", req.method, req.url);
    next()
})

app.use(express.static("public"))

// app.get("/index.html", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

// app.get("/community.html", (req, res) => {
//     res.sendFile(__dirname + "/public/community.html")
// })

// app.get("/solutions.html"), (req, res) => {
//     res.sendFile(__dirname + "/public/solutions.html")
// }

// app.get("/pricing.html"), (req, res) => {
//     res.sendFile(__dirname + "/public/pricing.html")
// }

app.use((_, res) => {
    res.status(404)
    res.sendFile(__dirname + "/public/404.html")
})


app.listen(PORT, () => console.log("Server listing on Port", PORT))