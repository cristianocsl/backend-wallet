const { client } = require('../connection');

const getExpenses = async (userId) => {
  const db = client.db('backendWallet');
  const expenses = await db.collection('expense').find({ userId }).toArray();
  return expenses;
};

module.exports = getExpenses;
