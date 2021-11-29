const rescue = require('express-rescue');
const middlew = require('../../middlewares/validations');

const userLogin = rescue(
  async (req, res, next) => {
    const { error } = await middlew.validateLogin(req.body);
    if (error) return next(error);
    res.status(200).json(req.body);
  },
);

module.exports = (routerUser) => {
  routerUser.post('/login', userLogin);
};