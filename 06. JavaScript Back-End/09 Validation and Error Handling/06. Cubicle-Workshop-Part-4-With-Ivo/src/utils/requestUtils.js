exports.handleRequest = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(rqe, res);
    } catch (err) {
      next(err);
    }
  };
};
