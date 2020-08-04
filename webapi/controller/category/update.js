const { Category } = require("../../models");
const Validator = require("../../libs/Validator");
const err = require("../../libs/err");
const schema = require("../../schema/category/update.json");

async function main(id, data) {
  const validateRes = Validator.validateData(schema, data);
  if(validateRes.err) {
    return err(400, validateRes.msg);
  }
  let options = {
    limit: 1,
    where: { id },
  }
  console.log(data,typeof data, options);
  let res = await Category.update(data, options);
  return Boolean(res[0])
}

module.exports = main