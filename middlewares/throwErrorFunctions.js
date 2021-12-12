const { UNAUTHORIZED, CONFLICT, UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;

const isJoi = (err, res) => {
  if (err.isJoi) {
    return res.status(UNPROCESSABLE_ENTITY).json({
      err: { message: err.details[0].message },
    });
  }
};

const unauthent = (err, res) => {
  if (err.unauthent) {
    return res.status(UNAUTHORIZED).json({ message: 'Incorrect email or password.' });
  }
};

const emailExists = (err, res) => {
  if (err.emailExists) {
    return res.status(CONFLICT).json({ message: 'Email already exists.' });
  }
};

module.exports = {
  isJoi,
  unauthent,
  emailExists,
};
