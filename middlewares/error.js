const errorHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      err: { code: 'invalidData', message: err.details[0].message },
    });
  }

  const stockProblem = 'stock_problem';

  const statusByErrorCode = {
    invalidData: 422,
    notFound: 404,
  };

  statusByErrorCode[stockProblem] = 404;

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({
    err: { code: err.code, message: err.message },
  });
};

module.exports = (app) => {
  app.use(errorHandler);
};