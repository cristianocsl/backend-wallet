const { ObjectId } = require('mongodb');
const { client } = require('../connection');

const updateExpense = async (expenseId, expenseInfo) => {
  if (!ObjectId.isValid(expenseId)) return null;

  const db = client.db('backendWallet');
  const { value } = db.collection('expense').findOneAndUpdate(
    { _id: ObjectId(expenseId) },
    { $set: expenseInfo },
    { returnDocument: 'after', returnOriginal: false },
  );
  return value;
};

module.exports = updateExpense;
