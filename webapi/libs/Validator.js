const Ajv = require("ajv")
const AjvErrors = require("ajv-errors")
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
AjvErrors(ajv)

class Validator {
  static isSafeNonNegtiveInteger(number) {
    return Number.isSafeInteger(number) && number >= 0 ? true : false;
  }
  
  static isSafePositiveInteger(number) {
    return Number.isSafeInteger(number) && number > 0 ? true : false;
  }
  
  static isValidperPage(number) {
    return Number.isSafeInteger(number) && number > 0 && number <= 100 ? true : false;
  }
  
  static isValidStatus(number) {
    return [0, 1, 2].includes(number) ? true : false;
  }

  static isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  static isJson(obj) {
    
    
    try {
      return JSON.stringify(obj);
    }
    catch(e) {
      console.error(e);  
      return false
    }
  }

  static deleteUndefinedProperties(obj) {
    obj = Object.assign({}, obj);
    let keys = Reflect.ownKeys(obj);
    for (const key of keys) {
      if(obj[key] === undefined) {
        delete obj[key];
      }
    }
    return obj;
  }

  static deleteExtraProperties(data, propertiesInSchema)  {
    if(!this.isObject(data)) {
      return {}
    }
    data = Object.assign({}, data);
    let dataKeys = Reflect.ownKeys(data)
    let existKeys = Reflect.ownKeys(propertiesInSchema)
    for (let key of dataKeys) {
      if (!existKeys.includes(key)) {
        delete data[key]
      }
    }
    return data
  }

  static validateData(schema, data) {
    // 判断请求体是否合法
    let validate = ajv.compile(schema)
    let valid = validate(data)
    // 不合法返回错误
    if (!valid) {
      let err = Validator.ajvErrorToString(validate.errors)
      return {
        err: true,
        msg: err.message
      }
    }
    else {
      return {
        err: false
      }
    }
  }

  static ajvErrorToString(ajvError) {
    if(ajvError.length > 0) {
      return ajvError[0]
    }
    else {
      return "no error"
    }
  }
}

module.exports = Validator