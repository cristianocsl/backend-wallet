const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = { expiresIn: '15d', algorithm: 'HS256' };

const tokenGenerator = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};

module.exports = tokenGenerator;