const { findUser } = require('../../models/user');
const { ApiError } = require('../../error/apiError');
const { INCORRECT_LOGIN } = require('../../error/msgCodeError');
const tokenGenerator = require('./tokenGenerator');

const { AppErrors } = ApiError;

const login = async (body) => {
  const { email, password: inputPassword } = body;

  const user = await findUser(email);

  if (!user || inputPassword !== user.password) return AppErrors(INCORRECT_LOGIN);

  const { password, birthDate, _id, ...others } = user;

  const payload = { ...others, _id: _id.toString() };

  const token = tokenGenerator(payload);

  return { token };
};

module.exports = login;
