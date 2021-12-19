const { findUser } = require('../../models/user');
const { getExpenses } = require('../../models/expense');

const userInfo = async (reqUser) => {
  const { email } = reqUser;
  const { firstName, lastName, _id } = await findUser(email);
  const expenses = await getExpenses(_id);
  return {
    name: `${firstName} ${lastName}`,
    email,
    ...expenses,
  };
};

module.exports = userInfo;
