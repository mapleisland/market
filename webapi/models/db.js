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
  storage: './database/database.sqlite',
  operatorsAliases: false
});

module.exports = sequelize