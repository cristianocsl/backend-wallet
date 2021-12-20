const { ObjectId } = require('mongodb');
const connection = require('../connection');

const deleteExpense = async (expenseId) => {
  if (!ObjectId.isValid(expenseId)) return null;
  const expense = await connection().collection('expenses').findOneAndDelete(expenseId);
  return expense;
};

module.exports = deleteExpense;
