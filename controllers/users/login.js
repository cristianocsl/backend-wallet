const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const middlew = require('../../middlewares/validations');

const { JWT_SECRET } = process.env;

const userLogin = rescue(
  async (req, res, next) => {
    const { error } = await middlew.validateLogin(req.body);
    if (error) return next(error);

    const payload = {
      email: req.body.email,
      admin: false,
    };

    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    res.status(200).json({ token });
  },
);

module.exports = (routerUser) => {
  routerUser.post('/login', userLogin);
};