require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rootRouter = require('./controllers/root');

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

rootRouter(app);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));