const { UNAUTHORIZED, CONFLICT } = require('http-status-codes').StatusCodes;

const INVALID_ENTRIES = {
  code: UNAUTHORIZED,
  message: 'Incorrect email or password.',
};

const EMAIL_EXISTING = {
  code: CONFLICT,
  message: 'Email already exists.',
};

module.exports = {
  INVALID_ENTRIES,
  EMAIL_EXISTING,
};
