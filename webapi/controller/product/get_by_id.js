const { Product } = require("../../models");

async function main(id) {
  let res = await Product.findByPk(id);
  return res
}

module.exports = main