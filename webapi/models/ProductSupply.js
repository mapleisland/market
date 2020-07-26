const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const ProductSupply = sequelize.define('ProductSupply', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  supply_time: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  show: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    allowNull: false
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'product_supply'
});

module.exports = ProductSupply