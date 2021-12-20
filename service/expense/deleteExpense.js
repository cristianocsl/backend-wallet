const { deleteExpense: remove } = require('../../models/expense');

const deleteExpense = async (expenseId) => remove(expenseId);

module.exports = deleteExpense;
