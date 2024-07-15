
/**
 * Custom Error class to handle errors
 * @param {*} message
 * @param {*} statusCode
 * @returns Custom Error
 */
class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}


/**
 * 
 * @param {*} message 
 * @param {*} statusCode 
 * @returns Custom Error
 * @example createCustomError('Not Found', 404)
 */
const createCustomError = (message, statusCode) => {
  return new CustomApiError(message, statusCode);
}

module.exports = { createCustomError, CustomApiError };