require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {registerUser, loginUser, post, getPost} = require('./controller')

const app = express()

let {SERVER_PORT, SESSION_SECRET}= process.env

app.use(express.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected')
})

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialization: true,
        cookies: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        },
        user: {}
    })
)

app.post('/api/auth/register', registerUser)
app.post('/api/auth/login', loginUser)
app.post('/api/post/:id', post)
app.get('/api/posts/', getPost)


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})