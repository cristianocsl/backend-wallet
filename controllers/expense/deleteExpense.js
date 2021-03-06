const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const { deleteExpense: remove } = require('../../service/expense');

const deleteExpense = rescue(
  async (req, res, _next) => {
    const { id } = req.params;
    const deletedExpense = await remove(id);
    return res.status(OK).json({
      message: 'Expense deleted successfully!',
      deletedExpense,
    });
  },
);

module.exports = deleteExpense;
