require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./middlewares/authentication');
const rootRouter = require('./controllers/root');
const error = require('./middlewares/error');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

auth(app);
rootRouter(app);
error(app);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));