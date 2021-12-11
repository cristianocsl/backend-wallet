const jwt = require('jsonwebtoken');
// const rescue = require('express-rescue');
const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { JWT_SECRET } = process.env;

const MSG_NOT_INF = { err: { code: 'unauthenticated', message: 'Informe o token' } };

const authentication = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(MSG_NOT_INF);

  try {
    const user = jwt.verify(token, JWT_SECRET);
  
    req.user = user; // payload é armazenado no objeto da request na nova chave 'user'
    return next();
  } catch (err) {
    next(res.status(UNAUTHORIZED).json(MSG_NOT_INF));
  }
};

module.exports = authentication;