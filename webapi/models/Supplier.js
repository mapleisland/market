const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const Supplier = sequelize.define('supplier', {
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
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'supplier'
});

module.exports = Supplier