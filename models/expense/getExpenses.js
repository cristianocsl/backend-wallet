const connection = require('../connection');

const getExpenses = async (userId) => {
  const db = await connection();
  const expenses = await db.collection('expense').find({ userId }).toArray();
  return expenses;
};

module.exports = getExpenses;
