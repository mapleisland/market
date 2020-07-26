const Product = require("../../models/Product");

async function main(id, data) {
  let options = {
    limit: 1,
    where: { id },
  }
  let res = await Product.update(data, options);
  return res
}

module.exports = main