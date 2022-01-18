const { updateExpense: update } = require('../../models/expense');

const updateExpense = async (expenseId, expenseInfo) => {
  const expense = await update(expenseId, expenseInfo);
  return expense;
};

module.exports = updateExpense;
