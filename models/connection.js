const { MongoClient } = require('mongodb');

require('dotenv').config();

// const MONGO_DB_URL = `mongodb://${process.env.HOST}:27017/`;

const { MONGO_DB_URL } = process.env;
const DB_NAME = 'backendWallet';

const connection = () => {
  const client = new MongoClient(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((err) => {
    client.db(DB_NAME);
    // perform actions on the collection object
    client.close();
  });
  return client;
};

// let db = null;

// const OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const connection = () => (db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => {
//       db = conn.db(DB_NAME);
//       return db;
//     }).catch((err) => {
//       console.error(err.message);
//       process.exit(1);
//     }));

    module.exports = connection;
