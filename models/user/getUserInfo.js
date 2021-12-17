const connection = require('../connection');

const getUserInfo = async () => {
  const db = await connection();
  const info = await db.collection('users').find().toArray();
  return info;
};

module.exports = getUserInfo;