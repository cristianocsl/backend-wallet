const errorHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      err: { code: 'invalidData', message: err.details[0].message },
    });
  }

  const statusByErrorCode = {
    invalidData: 422,
    notFound: 404,
    stockProblem: 404,
    unauthenticated: 401,
  };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({
    err: { code: err.code, message: err.message },
  });
};

module.exports = (app) => {
  app.use(errorHandler);
};