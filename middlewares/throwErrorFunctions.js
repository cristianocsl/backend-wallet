const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const unauthent = (err, res) => {
  if (err.unauthent) {
    return res.status(UNAUTHORIZED).json({ message: 'Incorrect email or password' });
  }
};

module.exports = {
  unauthent,
};
