const { ObjectId } = require('mongodb');
const { client } = require('../connection');

const deleteExpense = async (expenseId) => {
  if (!ObjectId.isValid(expenseId)) return null;
  const db = client.db('backendWallet');
  const { value } = await db.collection('expense')
    .findOneAndDelete({ _id: ObjectId(expenseId) });

  return value;
};

module.exports = deleteExpense;
