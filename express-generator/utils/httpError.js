const { STATUS_CODES } = require("http");

class HttpError extends Error {
  constructor(errorCode, message) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.errorCode = errorCode || 500;

    this.message = message || STATUS_CODES[this.errorCode];
  }
}

module.exports = HttpError;
