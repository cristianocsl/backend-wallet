const rescue = require('express-rescue');
const middlew = require('../../middlewares/validations');
const serviceUser = require('../../service/users');

const userRegister = rescue(
  async (req, res, next) => {
    const { error } = await middlew.validateRegister(req.body);

    if (error) return next(error);

    const { confirmPassword, ...otherInfos } = req.body;

    const newUser = await serviceUser.createUser(otherInfos);

    if (newUser.err) return next(newUser.err);

    res.status(200).json(newUser);
  },
);

module.exports = (routerUser) => {
  routerUser.post('/', userRegister);
};