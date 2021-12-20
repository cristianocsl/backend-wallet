const { ObjectId } = require('mongodb');
const connection = require('../connection');

const updateExpense = async (expenseId, expenseInfo) => {
  if (!ObjectId.isValid(expenseId)) return null;

  const db = await connection();
  const { value } = await db.collection('expense').findOneAndUpdate(
    { _id: ObjectId(expenseId) },
    { $set: expenseInfo },
    { returnDocument: 'after', returnOriginal: false },
  );
  return value;
};

module.exports = updateExpense;
