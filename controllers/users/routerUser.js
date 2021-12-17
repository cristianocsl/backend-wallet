const express = require('express');
const { createUser, login } = require('./index');

const routerUser = express.Router({ mergeParams: true });

routerUser.post('/', createUser);
routerUser.post('/login', login);

module.exports = routerUser;