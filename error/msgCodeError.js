const { UNAUTHORIZED, CONFLICT } = require('http-status-codes').StatusCodes;

const INCORRECT_LOGIN = {
  code: UNAUTHORIZED,
  message: 'Incorrect email or password.',
};

const EMAIL_EXISTING = {
  code: CONFLICT,
  message: 'Email already exists.',
};

module.exports = {
  INCORRECT_LOGIN,
  EMAIL_EXISTING,
};
