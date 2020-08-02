const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const PurchaseChannel = sequelize.define('purchase_channel', {
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
  tableName: 'purchase_channel'
});

module.exports = PurchaseChannel