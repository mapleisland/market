const { Category } = require("../../models");

async function main(id) {
  let res = await Category.findByPk(id);
  return res
}

module.exports = main