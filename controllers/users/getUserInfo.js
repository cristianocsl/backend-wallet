const { OK } = require('http-status-codes').StatusCodes;
const rescue = require('express-rescue');
const { userInfo } = require('../../service/users');

const getUserInfo = rescue(
  async (req, res, _next) => {
    const { user } = req;
    const userWallet = await userInfo(user);
    return res.status(OK).json({ userWallet });
  },
);

module.exports = getUserInfo;
