const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const { validateLogin } = require('../../middlewares/validateRegistration');
const service = require('../../service/users');

const login = rescue(
  async (req, res, next) => {
    const reqBody = req.body;

    const { error } = await validateLogin(reqBody);

    if (error) return next(error);
    
    const token = await service.login(reqBody);
    
    return res.status(OK).json({
      message: 'Login efetuado com sucesso!',
      ...token,
    });
  },
);

module.exports = login;
