import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT || 3000
const __dirname = import.meta.url.substring(7, import.meta.url.lastIndexOf("/"))

app.use(express.static(__dirname))
app.use(express.static(__dirname + "/routes"))
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(port, () => {
    console.log("Server is listening on port 3000")
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/routes/html/index.html")
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/routes/html/Register.html")
});

app.post('/register', (req, res) => {
    res.redirect('/')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/routes/html/Login.html")
});

app.post('/login', (req, res) => {
    res.redirect('/')
});
app.get('/vitrine', (req, res) => {
    res.sendFile(__dirname + "/routes/html/Vitrine.html")
});

app.post('/vitrine', (req, res) => {
    res.redirect('/login')
})