const rescue = require('express-rescue');
const { expense } = require('../../service/expense');

const createExpense = rescue(
  async (req, res, _next) => {
    const reqBody = req.body;

    const { user } = req;

    await expense(reqBody, user);

    return res.status(200).json({ message: 'Despesa criada com sucesso!' });
  },
);

module.exports = createExpense;
