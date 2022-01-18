const { createExpense: expense } = require('../../models/expense');

const createExpense = async (reqBody, userInfo) => {
  const { _id: userId } = userInfo;
  const expenseInfo = { ...reqBody, userId };
  const insertedId = await expense(expenseInfo);

  return { _id: insertedId, userId, ...reqBody };
};

module.exports = createExpense;
