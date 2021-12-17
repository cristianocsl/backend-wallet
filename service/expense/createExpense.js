const { createExpense } = require('../../models/expense');

const expense = async (info) => {
  await createExpense(info);
  return {
    ...info,
  };
};

module.exports = expense;
