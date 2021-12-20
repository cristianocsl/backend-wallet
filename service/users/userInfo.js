const { getExpenses } = require('../../models/expense');

const userInfo = async (reqUser) => {
  const { email, firstName, lastName, _id } = reqUser;
  const expenses = await getExpenses(_id);

  const sum = expenses.reduce((acc, curr) => acc.value + curr.value);

  return {
    name: `${firstName} ${lastName}`,
    email,
    amountOfExpenses: expenses.length,
    totalAmountOfExpenses: sum,
    expenses,
  };
};

module.exports = userInfo;
