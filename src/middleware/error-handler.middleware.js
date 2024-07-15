const { CustomApiError } = require("../errors/error");


/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns Error message
 */
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("Error Handler Middleware");
  console.log("CustomAPIError", CustomApiError);

  if (err instanceof CustomApiError) {
    console.log("Instance of CustomAPIError");
    return res.status(err.statusCode).json({ statusCode: err.statusCode, message: err.message });
  }

  console.log("Not an instance of CustomAPIError");
  return res.status(500).json({ msg: "Something went wrong" });
}

module.exports = errorHandlerMiddleware;