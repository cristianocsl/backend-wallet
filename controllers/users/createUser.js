const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const { validateRegister } = require('../../middlewares/validateRegistration');
const { createUser: registerUser } = require('../../service/users');

const createUser = rescue(
  async (req, res, next) => {
    const reqBody = req.body;

    const { error } = await validateRegister(reqBody);

    if (error) return next(error);

    const { confirmPassword, ...otherInfos } = reqBody;

    const result = await registerUser(otherInfos);

    if (result) return next(result);

    return res.status(OK).json('Usuário criado com sucesso!');
  },
);

module.exports = createUser;
