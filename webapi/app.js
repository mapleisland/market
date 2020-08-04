const os = require('os');
const path = require("path")
const Fastify = require("fastify")
const app = Fastify()
const fastifyCors = require("fastify-cors")
app.register(fastifyCors)

app.register(require('fastify-static'), {
  root: path.join(__dirname, 'page'),
  prefix: '/', // optional: default '/'
})


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

const myHost = getIPAdress();
app.listen(8888, "0.0.0.0", () => {
  console.log(`
  服务器启动成功, 请打开浏览器!
  浏览今日菜价请访问 ${myHost}:8888/#/
  播放循环动画请访问 ${myHost}:8888/#/show
  进入后台管理界面请访问 ${myHost}:8888/#/admin
  `
  );
})

function getIPAdress() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
