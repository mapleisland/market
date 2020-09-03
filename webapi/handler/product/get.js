const { Product, Category } = require("../../models");
const Validator = require("../../libs/Validator");
const err = require("../../libs/err");
const schema = require("../../schema/product/get.json");

async function main(data) {
  if(data.category_id) { data.category_id = Number(data.category_id) }
  if(data.show) { data.show = data.show === "true" ? true : false }
  const validateRes = Validator.validateData(schema, data);
  if(validateRes.err) {
    return err(400, validateRes.msg);
  }
  let options = {
    where: data,
    order: [["display_order", "asc"]],
    include: {
      model: Category,
    }
  }
  let res = await Product.findAndCountAll(options);
  return res
}

module.exports = main