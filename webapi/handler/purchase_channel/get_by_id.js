const { PurchaseChannel } = require("../../models");

async function main(id) {
  let res = await PurchaseChannel.findByPk(id);
  return res
}

module.exports = main