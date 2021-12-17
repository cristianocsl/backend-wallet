const { getUserInfo } = require('../../models/user');

const userInfo = async () => {
const info = await getUserInfo();
return info;
};

module.exports = userInfo;
