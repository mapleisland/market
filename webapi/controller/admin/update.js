const { Admin } = require("../../models");
const Validator = require("../../libs/Validator");
const err = require("../../libs/err");
const schema = require("../../schema/category/update.json");

async function main(data) {
  const validateRes = Validator.validateData(schema, data);
  if(validateRes.err) {
    return err(400, validateRes.msg);
  }
  let options = {
    limit: 1,
    where: { id },
  }
  let res = await Admin.update(data, options);
  return res
}

module.exports = main