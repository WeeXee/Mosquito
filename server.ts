import express from 'express'
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client'
import {hashPassword} from "./utils/hashPassword";
import bcrypt, {compare, compareSync} from "bcrypt";

const app = express()
const port = process.env.PORT || 3000
const prisma = new PrismaClient()

app.use('/ts', express.static(__dirname + '/routes/ts'))
app.use(express.static(__dirname))
app.use(express.static(__dirname + "/routes"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.listen(port, () => {
    console.log("Server is listening on port 3000")
});

app.get('/', (req: any, res: { sendFile: (arg0: string) => void }) => {
    res.sendFile(__dirname + "/routes/html/index.html")
});

app.get('/register', (req: any, res: { sendFile: (arg0: string) => void }) => {
    res.sendFile(__dirname + "/routes/html/Register.html")
});

app.post('/register', async (req, res) => {
    try {
        const {username, email, password} = req.body;
        await prisma.clientInfos.create({
            data: {
                UserName: username,
                Mail: email,
                Password: await hashPassword(password),
            },
        });
        console.log('Utilisateur créé avec succès !');
        res.redirect('/')
    } catch (error) {
        console.log(error)
        console.log('Erreur lors de la création de l\'utilisateur');
        res.status(500).json({error: 'Impossible de créer un utilisateur'});
    }
});

app.get('/login', (req: any, res: { sendFile: (arg0: string) => void }) => {
    res.sendFile(__dirname + "/routes/html/Login.html")
});

app.post('/login', async(req, res) => {
    const {username, password} = req.body;
    let passwordHash = await hashPassword(password);
    const client = await prisma.clientInfos.findFirst({
        where: {
            UserName: username,
        }
    });
    if (client?.UserName === username) {
        res.redirect('/')
    } else {
        res.redirect('/login')
    }
});

app.get('/vitrine', (req: any, res: { sendFile: (arg0: string) => void }) => {
    res.sendFile(__dirname + "/routes/html/Vitrine.html")
});

app.post('/vitrine', (req: any, res: { redirect: (arg0: string) => void }) => {
    res.redirect('/login')
})