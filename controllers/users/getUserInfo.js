const { OK } = require('http-status-codes').StatusCodes;
const rescue = require('express-rescue');
const { userInfo } = require('../../service/users');

const getUserInfo = rescue(
  async (req, res, _next) => {
    const { user } = req;
    const info = await userInfo(user);
    return res.status(OK).json(info);
  },
);

module.exports = getUserInfo;
