const Product = require("../../models/Product");

async function main() {
  let res = await Product.findAndCountAll();
  return res
}

module.exports = main