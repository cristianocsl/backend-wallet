const { createExpense } = require('../../models/expense');

const expense = async (reqBody, userInfo) => {
  const { _id: userId } = userInfo;
  const expenseInfo = { ...reqBody, userId };
  const insertedId = await createExpense(expenseInfo);

  return { _id: insertedId, userId, ...reqBody };
};

module.exports = expense;
