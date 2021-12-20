const { ObjectId } = require('mongodb');
const connection = require('../connection');

const deleteExpense = async (expenseId) => {
  if (!ObjectId.isValid(expenseId)) return null;
  const expense = await connection().collection('expenses').findOneAndDelete(
    { _id: ObjectId(expenseId) },
  );
  return expense;
};

module.exports = deleteExpense;
