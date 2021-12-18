const connection = require('../connection');

const getExpenses = async (userId) => {
  const db = await connection();
  await db.collection('expense').findOne(userId);
};

module.exports = getExpenses;
