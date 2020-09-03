const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const Merchant = sequelize.define('merchant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  merchant_name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  operator_name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  industry: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  score: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "5",
  },
  complaint: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  license_url: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  wxpay_qr_url: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  alipay_qr_url: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'merchant'
});

module.exports = Merchant