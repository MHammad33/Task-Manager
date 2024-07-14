const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      console.log("asyncWrapper 2");
      console.log("---------------");
      await fn(req, res, next);
    } catch (err) {
      console.log("asyncWrapper 33333");
      console.log("---------------");
      next(err);
    }
  };
};

module.exports = asyncWrapper;