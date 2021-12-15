const rescue = require('express-rescue');
const { validateRegister } = require('../../middlewares/validateRegistration');
const service = require('../../service/users');

const createUser = rescue(
  async (req, res, next) => {
    const reqBody = req.body;

    const { error } = await validateRegister(reqBody);

    if (error) return next(error);

    const { confirmPassword, ...otherInfos } = reqBody;

    const result = await service.createUser(otherInfos);

    if (result.emailExists) return next(result);

    return res.status(200).json('Usuário criado com sucesso!');
  },
);

module.exports = createUser;
