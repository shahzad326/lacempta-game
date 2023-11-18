const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  err.message = err.message || 'Server error';

  // Wrong Mongo Db Error
  if (err.name === 'CastError') {
    const message = `Resource not found Invalid:  ${err.path} `;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)}  Entered `;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT Error
  if (err.name === 'JsonWebTokenError') {
    const message = `Json Web Token is invalid, Try Again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire Error
  if (err.name === 'TokenExpiredError') {
    const message = `Json Web Token has expired, Try Again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
};
