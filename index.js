const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const { login, password } = require('./database/login.json')
const app = express()

const sequelize = new Sequelize("marmoset", login, password, {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 0,
    //logging: false
})

try {
    sequelize.authenticate();
    console.log('-> Connection with mySQL has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

sequelize.sync({ alter: true  })

app.get('/sign', (req, res) => {
    res.render('sign', {qs: res.query})
})

app.post('/sign', bodyParser.urlencoded({ extended: false }), (req, res) => {
    console.log(req.body)
    res.render('sign', {qs: res.query})
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("-> All models were synchronized successfully.")
    console.log('-> server is open at http://localhost:5000')
})