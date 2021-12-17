const rescue = require('express-rescue');

const createExpense = rescue(
  async (req, res, _next) => {
    const reqBody = req.body;

    return res.status(200).json(reqBody);
  },
);

module.exports = createExpense;