const { MongoClient } = require('mongodb');

require('dotenv').config();

// const MONGO_DB_URL = `mongodb://${process.env.HOST}:27017/`;
const USERNAME = 'cslcristiano:password>@cluster0.r5ij7.mongodb.net';
const MONGO_DB_URL = `mongodb+srv://${USERNAME}/myFirstDatabase?retryWrites=true&w=majority`;
const DB_NAME = 'backendWallet';

let db = null;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }).catch((err) => {
      console.error(err.message);
      process.exit(1);
    }));

    module.exports = connection;
