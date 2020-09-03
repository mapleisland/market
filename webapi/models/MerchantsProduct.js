const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const MerchantsProduct = sequelize.define('merchants_product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  merchant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  qcpass: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    allowNull: false
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'merchants_product'
});

module.exports = MerchantsProduct