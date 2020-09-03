const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const SellRecord = sequelize.define('sell_record', {
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
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sell_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'sell_record'
});

module.exports = SellRecord