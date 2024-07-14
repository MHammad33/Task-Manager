const asyncWrapper = (fn) => {
  try {
    return async (req, res, next) => {
      await fn(req, res, next);
    };
  } catch (err) {
    next(err);
  }
};

module.exports = asyncWrapper;