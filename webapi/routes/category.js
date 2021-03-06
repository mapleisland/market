const getHandler = require("../handler/category/get");
const getByIdHandler = require("../handler/category/get_by_id");
const createHandler = require("../handler/category/create");
const updateHandler = require("../handler/category/update");
const deleteHandler = require("../handler/category/delete");

function router(fastify, opts, done) {

  fastify.get('/', async (request, reply) => {
    try {
      return await getHandler();
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
    console.log(data, typeof data);
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