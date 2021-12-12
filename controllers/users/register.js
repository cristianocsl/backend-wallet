const rescue = require('express-rescue');
const { validateRegister } = require('../../middlewares/validateRegistration');
const { createUser } = require('../../service/users');

const userRegister = rescue(
  async (req, res, next) => {
    const reqBody = req.body;

    const { error } = await validateRegister(reqBody);

    if (error) return next(error);

    const { confirmPassword, ...otherInfos } = reqBody;

    const newUser = await createUser(otherInfos);

    if (newUser.err) return next(newUser.err);

    res.status(200).json('Usuário criado com sucesso!');
  },
);

module.exports = (routerUser) => {
  routerUser.post('/', userRegister);
};
