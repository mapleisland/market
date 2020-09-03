const { Supplier } = require("../../models");

async function main() {
  let res = await Supplier.findAndCountAll();
  return res
}

module.exports = main