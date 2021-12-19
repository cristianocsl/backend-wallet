const connection = require('../connection');

const createExpense = async (expenseInfo) => {
  const db = await connection();
  const { insertedId } = await db.collection('expense').insertOne(expenseInfo);
  return insertedId;
};

module.exports = createExpense;
