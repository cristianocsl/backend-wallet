const { createExpense } = require('../../models/expense');
const { findByEmail } = require('../../models/user');

const expense = async (reqBody, userInfo) => {
  const { email } = userInfo;
  const user = await findByEmail(email);
  console.log('user expense', user);
  await createExpense(reqBody);
  return {
    ...reqBody,
  };
};

module.exports = expense;
