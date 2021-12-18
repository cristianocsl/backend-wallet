const { ObjectId } = require('mongodb');
const { createExpense } = require('../../models/expense');
const { findByEmail } = require('../../models/user');

const expense = async (reqBody, userInfo) => {
  const { email } = userInfo;
  const { _id } = await findByEmail(email);
  const userId = ObjectId(_id).toString();
  await createExpense(reqBody);
  return {
    ...reqBody,
    userId,
  };
};

module.exports = expense;
