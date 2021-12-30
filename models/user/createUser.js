const { client } = require('../connection');

const createUser = async (userInfos) => {
  const db = client;
  await db.collection('users').insertOne(userInfos); // com userInfos entre chaves, o objeto retornado deixa de vir com a chave _id repetida.
};

module.exports = createUser;
