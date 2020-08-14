const express = require('express')

const app = express()

const users = [
    {
        id: 1,
        username: "raisson souto",
        password: "123456",
    },
    {
        id: 2,
        username: "berrytern",
        password: "123456",
    },
    {
        id: 3,
        username: "bill gates",
        password: "123456",
    }
]

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/:username', (req, res) => {
    res.json(users.filter(member => member.username === req.params.username))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)