const { PurchaseChannel } = require("../../models");

async function main() {
  let res = await PurchaseChannel.findAndCountAll();
  return res
}

module.exports = main