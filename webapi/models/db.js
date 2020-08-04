const path = require("path")
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: path.resolve(__dirname, '../database/database.sqlite')
});

module.exports = sequelize