const { Supplier } = require("../../models");
const Validator = require("../../libs/Validator");
const err = require("../../libs/err");
const schema = require("../../schema/supplier/create.json");

async function main(data) {
  const validateRes = Validator.validateData(schema, data);
  if(validateRes.err) {
    return err(400, validateRes.msg);
  }
  const options = {
    limit: 1,
    where: {
      name: data.name
    }
  }
  let count = await Supplier.count(options);
  if(count) return err(400, "该名称已经存在");
  let res = await Supplier.create(data);
  return res
}

module.exports = main