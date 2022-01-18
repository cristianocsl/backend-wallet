const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const { updateExpense: update } = require('../../service/expense');

const updateExpense = rescue(
  async (req, res, _next) => {
    const reqBody = req.body;
    const { id } = req.params;
    const expense = await update(id, reqBody);
    return res.status(OK).json({
      message: 'Expense updated successfully!',
      expense,
    });
  },
);

module.exports = updateExpense;
