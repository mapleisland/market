const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  display_order: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'category'
});

module.exports = Category