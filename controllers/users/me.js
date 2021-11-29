const rescue = require('express-rescue');

const me = rescue(
  async (req, res) => {
    const { email, admin } = req.user;
    res.status(200).json({ email, admin });
  },
);

module.exports = (routerUser) => {
  routerUser.get('/me', me);
};