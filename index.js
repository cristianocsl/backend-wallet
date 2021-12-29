require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const root = require('./controllers/root');
const error = require('./middlewares/error');

const app = express();
const { PORT } = process.env || 3001;

app.use(bodyParser.json());

// console.log(`${__dirname}/dist/`);
// const distDir = `${__dirname}/dist/`;
//  app.use(express.static(distDir));
app.get('/', (_req, res) => res.status(200).json({ message: 'Heroku funcionando!' }));

app.use('/', root);
app.use(error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
