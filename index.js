require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const root = require('./controllers/root');
const error = require('./middlewares/error');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/', root);
app.use(error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));