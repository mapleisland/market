const { Admin } = require("../../models");
const Validator = require("../../libs/Validator");
const err = require("../../libs/err");
const schema = require("../../schema/admin/create.json");

async function main(data) {
  const validateRes = Validator.validateData(schema, data);
  if(validateRes.err) {
    return err(400, validateRes.msg);
  }
  const options = {
    limit: 1,
    where: {
      username: data.username
    }
  }
  let count = await Admin.count(options);
  if(count) return err(400, "该名称已经存在");
  let res = await Admin.create(data);
  return res
}

module.exports = main