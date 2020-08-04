const Product = require("./Product");
const Category = require("./Category");
const Supplier = require("./Supplier");
const PurchaseChannel = require("./PurchaseChannel");

Product.belongsTo(Category, {
  sourceKey: "category_id",
  foreignKey: "id",
});

module.exports = {
  Product,
  Category,
  Supplier,
  PurchaseChannel,
}