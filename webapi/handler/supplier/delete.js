const { Supplier } = require("../../models");

async function main(id) {
  let options = {
    limit: 1,
    where: { id },
  }
  let res = await Supplier.destroy(options);
  return Boolean(res)
}

module.exports = main