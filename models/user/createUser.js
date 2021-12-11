const connection = require('../connection');

const createUser = async (userInfos) => {
  const { firstName, lastName, email } = userInfos;
  const db = await connection();
  const result = await db.collection('users').insertOne(userInfos); // com userInfos entre chaves, o objeto retornado deixa de vir com a chave _id repetida.
  return {
      _id: result.insertedId,
      firstName,
      lastName,
      email,
  };
};

  module.exports = createUser;