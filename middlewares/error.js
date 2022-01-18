const { ApiError } = require('../error/apiError');

const status = 500;

const errorHandler = (err, _req, res, _next) => {
console.log(err);

  if (err.isJoi) {
    return res.status(422).json({
      err: { code: 'invalidData', message: err.details[0].message },
    });
  }

  if (err instanceof ApiError) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(status).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
