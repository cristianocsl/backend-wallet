const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const { expense } = require('../../service/expense');

const createExpense = rescue(
  async (req, res, _next) => {
    const reqBody = req.body;

    const { user } = req;

    const expenseInfo = await expense(reqBody, user);

    return res.status(OK).json({
      message: 'Despesa criada com sucesso!',
      expenseInfo,
    });
  },
);

module.exports = createExpense;
