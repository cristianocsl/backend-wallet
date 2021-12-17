const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const { userInfo } = require('../../service/users');

const getUserInfo = rescue(
  async (_req, res) => {
    const info = userInfo();
    return res.status(OK).json(info);
  },
);

module.exports = getUserInfo;