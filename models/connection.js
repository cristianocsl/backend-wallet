const { MongoClient } = require('mongodb');

require('dotenv').config();

// const MONGO_DB_URL = `mongodb://${process.env.HOST}:27017/`;

const { MONGO_DB_URL } = process.env;
// const DB_NAME = 'backendWallet';

// let db = null;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = new MongoClient(MONGO_DB_URL, OPTIONS);

const bootStrap = async () => {
  try {
    connection.connect();
  } catch (err) {
    console.log('Connection failed');
  }
};

bootStrap();

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

//     module.exports = connection;
    module.exports = connection;
