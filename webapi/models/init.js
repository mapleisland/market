const sequelize = require("./db");
const Product = require("./Product");
const Category = require("./Category");
const Supplier = require("./Supplier");
const ProductSupply = require("./ProductSupply");
const Admin = require("./Admin");

(async () => {
  await sequelize.sync();
})();