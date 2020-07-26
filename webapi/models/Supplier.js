const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const Supplier = sequelize.define('Supplier', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'supplier'
});

module.exports = Supplier