const { Category } = require("../../models");

async function main() {
  let options = {
    order: [["display_order", "asc"]]
  }
  let res = await Category.findAndCountAll(options);
  return res
}

module.exports = main