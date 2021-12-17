const { OK } = require('http-status-codes').StatusCodes;
const rescue = require('express-rescue');
const { userInfo } = require('../../service/users');

const getUserInfo = rescue(
  async (_req, res, _next) => {
    const info = await userInfo();
    return res.status(OK).json(info);
  },
);

module.exports = getUserInfo;
