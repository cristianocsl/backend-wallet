const { findByEmail } = require('../../models/user');
const { ApiError } = require('../../error/apiError');
const { INCORRECT_LOGIN } = require('../../error/msgCodeError');
const tokenGenerator = require('./tokenGenerator');

const { AppErrors } = ApiError;

const login = async (body) => {
  const { email, password: inputPassword } = body;

  const user = await findByEmail(email);

  console.log('user', user);

  if (!user || inputPassword !== user.password) return AppErrors(INCORRECT_LOGIN);

  const { firstName, lastName } = user;

  const payload = { firstName, lastName, email };

  const token = tokenGenerator(payload);

  return { token };
};

module.exports = login;
