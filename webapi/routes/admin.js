const createController = require("../controller/admin/create");
const getController = require("../controller/admin/get");
const updateController = require("../controller/admin/update");

function router(fastify, opts, done) {

  fastify.post('/', async (request, reply) => {
    const data = request.body
    try {
      return await createController(data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  fastify.post('/login', async (request, reply) => {
    const data = request.body
    try {
      return await getController(data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  fastify.put('/change_password', async (request, reply) => {
    const data = request.body
    try {
      return await updateController(data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  done();
}

module.exports = router