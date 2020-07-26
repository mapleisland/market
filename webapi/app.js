const Fastify = require("fastify")
const app = Fastify()
const fastifyCors = require("fastify-cors")
app.register(fastifyCors)

// const home = require('./routes/home')
// app.register(home, { prefix: '/api' })

// const admin = require('./routes/admin')
// app.register(admin, { prefix: '/api/admin' })

const product = require('./routes/product')
app.register(product, { prefix: '/api/product' })

// const category = require('./routes/category')
// app.register(category, { prefix: '/api/category' })

// const supplier = require('./routes/supplier')
// app.register(supplier, { prefix: '/api/supplier' })

// const product_supply = require('./routes/product_supply')
// app.register(product_supply, { prefix: '/api/product_supply' })

app.listen(3000, "0.0.0.0", () => {
  console.log("server started!");
})