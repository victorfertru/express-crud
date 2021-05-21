const errorHandler = (error, req, res, next) => {
  res.status(error.errorCode).send(error.message);
};

module.exports = errorHandler;
