const modelUser = require('../../models/user');

const createUser = async (userInfos) => {
  const { email } = userInfos;

  const repetedEmail = await modelUser.findByEmail(email);

  if (repetedEmail) return { emailExists: true };

  await modelUser.createUser(userInfos);
};

module.exports = createUser;