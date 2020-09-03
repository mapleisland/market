const getHandler = require("../handler/product/get");
const getByIdHandler = require("../handler/product/get_by_id");
const createHandler = require("../handler/product/create");
const updateHandler = require("../handler/product/update");
const deleteHandler = require("../handler/product/delete");

function router(fastify, opts, done) {

  fastify.get('/', async (request, reply) => {
    let query = request.query
    try {
      return await getHandler(query);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  fastify.get('/:id(^\\d+$)', async (request, reply) => {
    const id = Number(request.params.id)
    try {
      return await getByIdHandler(id);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

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

  fastify.put('/:id(^\\d+$)', async (request, reply) => {
    const id = Number(request.params.id)
    const data = request.body
    try {
      return await updateHandler(id, data);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  fastify.delete('/:id(^\\d+$)', async (request, reply) => {
    const id = Number(request.params.id)
    try {
      return await deleteHandler(id);
    }
    catch (e) {
      console.error(e);
      return e
    }
  });

  done();
}

module.exports = router