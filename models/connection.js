const { MongoClient } = require('mongodb');

require('dotenv').config();

const { MONGO_DB_URL } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_DB_URL, OPTIONS);

const bootStrap = async () => {
  try {
    client.connect().db('backendWallet');
  } catch (err) {
    console.log('Connection failed');
  }
};

bootStrap();

module.exports = { client };
