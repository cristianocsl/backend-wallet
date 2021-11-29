const modelUser = require('../../models/user');

const ERR_MSG_CREATE = { code: 'invalidData', message: 'Email already exists' };

const createUser = async (userInfos) => {
  const { email } = userInfos;

  const alreadyExistsEmail = await modelUser.findByEmail(email);

  if (alreadyExistsEmail) return { err: ERR_MSG_CREATE };

  const createdUser = await modelUser.createUser(userInfos);
  
  return createdUser;
};

module.exports = createUser;