const sequelize = require("../../models/db");
const Category = require("../../models/Category");
const Supplier = require("../../models/Supplier");
const PurchaseChannel = require("../../models/PurchaseChannel");
const Product = require("../../models/Product");

(async () => {
  await sequelize.sync();

  let channel = require("./channel");
  for (const item of channel) {
    await PurchaseChannel.create({
      name: item,
    })
  }

  let category = require("./category");
  for (const i in category) {
    let category_info = await Category.create({
      name: category[i],
      display_order: Number(i) + 1
    })
    let products = require(`./p${i}`);
    for (const item of products) {
      let data = {
        name: item.name,
        category_id: category_info.id,
        price: item.price,
        unit: item.unit,
      }
      console.log(data);
      try {
        await Product.create(data)
      }
      catch(e) {
        console.error(e);
      }
    }
  }


})();
