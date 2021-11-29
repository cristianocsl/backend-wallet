const modelUser = require('../../models/user');

const ERR_MSG_CREATE = { code: 'invalidData', message: 'Email already exists' };

const createUser = async (userInfos) => {
  const { email } = userInfos;
  const repetedEmail = await modelUser.findByEmail(email);

  if (repetedEmail) return { err: ERR_MSG_CREATE };

  const createdUser = await modelUser.createUser(userInfos);

  return createdUser;
};

module.exports = createUser;