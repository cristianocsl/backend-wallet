const rescue = require('express-rescue');
const { validateLogin } = require('../../middlewares/validations');
const { login } = require('../../service/users');

const userLogin = rescue(
  async (req, res, next) => {
    const reqBody = req.body;

    const { error } = await validateLogin(reqBody);

    if (error) return next(error);

    const { user } = req;

    const reqBodyUser = { ...reqBody, user };

    const token = await login(reqBodyUser);

    return res.status(200).json(token);
  },
);

module.exports = (routerUser) => {
  routerUser.post('/login', userLogin);
};