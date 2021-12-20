const { ObjectId } = require('mongodb');
const connection = require('../connection');

const deleteExpense = async (expenseId) => {
  if (!ObjectId.isValid(expenseId)) return null;
  const db = await connection();
  const { value } = await db.collection('expense')
    .findOneAndDelete({ _id: ObjectId(expenseId) });

  return value;
};

module.exports = deleteExpense;
