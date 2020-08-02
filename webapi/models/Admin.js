const { DataTypes } = require('sequelize');
let sequelize = require("./db");

const Admin = sequelize.define('admin', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'admin'
});



module.exports = Admin