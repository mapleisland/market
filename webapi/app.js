const Fastify = require("fastify")
const app = Fastify()
const fastifyCors = require("fastify-cors")
app.register(fastifyCors)

// const home = require('./routes/home')
// app.register(home, { prefix: '/api' })

// const admin = require('./routes/admin')
// app.register(admin, { prefix: '/api/admin' })

const category = require('./routes/category')
app.register(category, { prefix: '/api/category' })

const supplier = require('./routes/supplier')
app.register(supplier, { prefix: '/api/supplier' })

const purchase_channel = require('./routes/purchase_channel')
app.register(purchase_channel, { prefix: '/api/purchase_channel' })

const product = require('./routes/product')
app.register(product, { prefix: '/api/product' })

app.listen(3000, "0.0.0.0", () => {
  console.log("server started!");
})