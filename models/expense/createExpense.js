const { client } = require('../connection');

const createExpense = async (expenseInfo) => {
  const db = client.db('backendWallet');
  const { insertedId } = await db.collection('expense').insertOne(expenseInfo);
  return insertedId;
};

module.exports = createExpense;
