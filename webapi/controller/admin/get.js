const { Admin } = require("../../models");

async function main(data) {
  let options = {
    where: data
  }
  let res = await Admin.count(options);
  return res
}

module.exports = main