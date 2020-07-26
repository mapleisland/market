const Product = require("../../models/Product");

async function main(data) {
  let res = await Product.create(data);
  return res
}

module.exports = main