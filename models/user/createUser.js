const connection = require('../connection');

const createUser = async (userInfos) => connection()
  .then((db) => db
    .collection('users')
    .insertOne({ userInfos }))
  .then((result) => ({
    _id: result.insertedId,
    userInfos,
  }));

  module.exports = createUser;