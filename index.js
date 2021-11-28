require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const getAll = require('./controllers/root');
const root = require('./controllers/root');

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

getAll(app);
root(app);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));