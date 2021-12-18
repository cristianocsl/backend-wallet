const connection = require('../connection');

const findByEmail = async (email) => {
  const db = await connection();

  const repetedEmail = await db.collection('users').findOne({ email });

  if (!repetedEmail) return null;
  console.log('repetedEmail', repetedEmail);

  return repetedEmail;
};

  module.exports = findByEmail;
