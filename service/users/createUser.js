const { findUser } = require('../../models/user');
const { ApiError } = require('../../error/apiError');
const { EMAIL_EXISTING } = require('../../error/msgCodeError');
const { createUser: registerUser } = require('../../models/user');
const { dateForMongodb } = require('../../geral');

const { AppErrors } = ApiError;

const createUser = async (userInfos) => {
  const { email, birthDate: isoDate } = userInfos;

  const repetedEmail = await findUser(email);

  if (repetedEmail) return AppErrors(EMAIL_EXISTING);

  const birthDate = new Date(
    await dateForMongodb(isoDate),
  );

  const modifyUserInfo = { ...userInfos, birthDate };

  const user = await registerUser(modifyUserInfo);

  return user;
};

module.exports = createUser;
