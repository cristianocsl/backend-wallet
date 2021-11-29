const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const controllerUser = require('../controllers/users').me;
// const { StatusCodes } = require('http-status-codes');

const { JWT_SECRET } = process.env;

const MSG_NOT_INF = { err: { code: 'unauthenticated', message: 'Informe o token' } };

const authentHandler = rescue(
  async (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return next(MSG_NOT_INF);

    const payload = jwt.verify(authorization, JWT_SECRET);

    req.user = payload; // payload é armazenado no objeto da request na nova chave 'user'
    return next();
  },
);

module.exports = (app) => {
  app.use('/auth', authentHandler, controllerUser);
};