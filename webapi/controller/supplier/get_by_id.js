const { Supplier } = require("../../models");

async function main(id) {
  let res = await Supplier.findByPk(id);
  return res
}

module.exports = main