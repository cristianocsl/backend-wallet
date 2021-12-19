const modelUser = require('../../models/user');
const { ApiError } = require('../../error/apiError');
const { EMAIL_EXISTING } = require('../../error/msgCodeError');

const { AppErrors } = ApiError;

const createUser = async (userInfos) => {
  const { email } = userInfos;

  const repetedEmail = await modelUser.findUser(email);

  if (repetedEmail) return AppErrors(EMAIL_EXISTING);

  await modelUser.createUser(userInfos);
};

module.exports = createUser;
