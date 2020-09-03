const createHandler = require("../handler/admin/create");
const getHandler = require("../handler/admin/get");
const updateHandler = require("../handler/admin/update");

function router(fastify, opts, done) {

  fastify.post('/', async (request, reply) => {
    const data = request.body
    try {
      return await createHandler(data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  fastify.post('/login', async (request, reply) => {
    const data = request.body
    try {
      return await getHandler(data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  fastify.put('/change_password', async (request, reply) => {
    const data = request.body
    try {
      return await updateHandler(data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  done();
}

module.exports = router