const { Category } = require("../../models");

async function main(id) {
  let options = {
    limit: 1,
    where: { id },
  }
  let res = await Category.destroy(options);
  return Boolean(res)
}

module.exports = main