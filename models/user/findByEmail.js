const connection = require('../connection');

const findByEmail = async (userInfos) => {
  const email = await connection()
  .then((db) => db
    .collection('users')
    .findOne({ userInfos }));
  
  if (!email) return null;
  return email;
};

  module.exports = findByEmail;