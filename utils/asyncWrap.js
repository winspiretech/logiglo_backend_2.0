const asyncWrap = (requestHandler) => {
  return function (req, res, next) {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

module.exports = { asyncWrap };
