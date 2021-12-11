const rescue = require('express-rescue');
const { validateLogin } = require('../../middlewares/validations');
const { login } = require('../../service/users');

const userLogin = rescue(
  async (req, res, next) => {
    const reqBody = req.body;

    const { error } = await validateLogin(reqBody);

    if (error) return next(error);

    const tokenOrError = await login(reqBody);

    if (tokenOrError.unaunthent) return next(tokenOrError);

    return res.status(200).json(tokenOrError);
  },
);

module.exports = (routerUser) => {
  routerUser.post('/login', userLogin);
};