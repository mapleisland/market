const Product = require("../../models/Product");

async function main(id) {
  let options = {
    limit: 1,
    where: { id },
  }
  let res = await Product.destroy(options);
  return res
}

module.exports = main