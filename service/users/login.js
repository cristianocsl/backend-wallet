const { findByEmail } = require('../../models/user');
const { ApiError } = require('../../error/apiError');
const { INCORRECT_LOGIN } = require('../../error/msgCodeError');
const tokenGenerator = require('./tokenGenerator');

const { AppErrors } = ApiError;

const login = async (body) => {
  const { email, password: inputPassword } = body;

  const user = await findByEmail(email);

  if (!user || inputPassword !== user.password) return AppErrors(INCORRECT_LOGIN);

  const { firstName, lastName, _id } = user;

  const payload = { firstName, lastName, email, _id };

  const token = tokenGenerator(payload);

  return { token };
};

module.exports = login;
