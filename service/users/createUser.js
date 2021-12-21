const { findUser } = require('../../models/user');
const { ApiError } = require('../../error/apiError');
const { EMAIL_EXISTING } = require('../../error/msgCodeError');
const { createUser: registerUser } = require('../../models/user');

const { AppErrors } = ApiError;

const createUser = async (userInfos) => {
  const { email } = userInfos;

  const repetedEmail = await findUser(email);

  if (repetedEmail) return AppErrors(EMAIL_EXISTING);

  const user = await registerUser(userInfos);

  return user;
};

module.exports = createUser;
