let errors = {
  400: "Bad Request"
}

function err(statusCode, message) {
  let error = Reflect.get(errors, statusCode) || ""
  return {
    statusCode,
    error,
    message
  }
}


module.exports = err