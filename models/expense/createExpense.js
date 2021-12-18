const connection = require('../connection');

const createExpense = async (expenseInfo, userId) => {
  const db = await connection();
  await db.collection('expense').insertOne({ ...expenseInfo });
};

module.exports = createExpense;
