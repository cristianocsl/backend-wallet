const rescue = require('express-rescue');

const userInfos = rescue(
  async (req, res, _next) => {
    res.status(200).json(req.body);
  },
);

module.exports = (routerUser) => {
  routerUser.post('/', userInfos);
};