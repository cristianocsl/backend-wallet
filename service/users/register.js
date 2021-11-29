const modelUser = require('../../models/user');

const createUser = async (userInfos) => {
  const createdUser = await modelUser.createUser(userInfos);
  return createdUser;
};

module.exports = createUser;