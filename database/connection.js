const Sequelize = require('sequelize')
const { login, password } = require('./login.json')

const sequelize = new Sequelize("marmoset", login, password, {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: 0,
  //logging: false
})

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize
globalThis.sequelize = sequelize