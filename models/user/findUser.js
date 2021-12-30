const { client } = require('../connection');

const findUser = async (email) => {
  const db = client.db('backendWallet');

  const repetedEmail = await db.collection('users').findOne({ email });

  if (!repetedEmail) return null;

  return repetedEmail;
};

  module.exports = findUser;

// const connection = require('../connection');

// const findUser = async (email) => {
//   const db = await connection();

//   const repetedEmail = await db.collection('users').findOne({ email });

//   if (!repetedEmail) return null;

//   return repetedEmail;
// };

//   module.exports = findUser;
