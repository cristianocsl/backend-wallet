const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const { validateLogin } = require('../../middlewares/validateRegistration');
const { login } = require('../../service/users');

const userLogin = rescue(
  async (req, res, next) => {
    const reqBody = req.body;

    const { error } = await validateLogin(reqBody);

    if (error) return next(error);

    const tokenOrError = await login(reqBody);

    if (tokenOrError.unauthent) return next(tokenOrError);

    return res.status(OK).json(tokenOrError);
  },
);

module.exports = (routerUser) => {
  routerUser.post('/login', userLogin);
};
