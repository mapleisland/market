const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const Product = sequelize.define('product', {
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
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  suppliers: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: false
  },
  purchase_channels: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: false
  },
  qcpass: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    allowNull: false
  },
  display_order: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false
  },
  note: {
    type: DataTypes.TEXT,
    defaultValue: "",
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
  tableName: 'product'
});

module.exports = Product