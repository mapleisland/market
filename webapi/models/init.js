const sequelize = require("./db");
const Product = require("./Product");
const Category = require("./Category");
const Supplier = require("./Supplier");
const PurchaseChannel = require("./PurchaseChannel");

(async () => {
  await sequelize.sync();
})();