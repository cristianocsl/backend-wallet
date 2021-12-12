const throwError = require('./throwErrorFunctions');

const status = 500;

const errorHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      err: { code: 'invalidData', message: err.details[0].message },
    });
  }

  throwError.emailExists(err, res);
  throwError.unauthent(err, res);

  return res.status(status).json({ message: err.message });
};

module.exports = (app) => {
  app.use(errorHandler);
};