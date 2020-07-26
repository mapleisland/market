const getController = require("../controller/product/get");
const createController = require("../controller/product/create");
const updateController = require("../controller/product/update");
const deleteController = require("../controller/product/delete");

function router(fastify, opts, done) {

  fastify.get('/', async (request, reply) => {
    try {
      return await getController();
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

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

  fastify.put('/:id', async (request, reply) => {
    const id = request.params.id
    const data = request.body
    try {
      return await updateController(id, data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  fastify.delete('/:id', async (request, reply) => {
    try {
      return await deleteController(id);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  done();
}

module.exports = router