const express = require('express');
const { authentication } = require('../../middlewares');
const { createUser, login, getUserInfo } = require('./index');

const routerUser = express.Router({ mergeParams: true });

routerUser.post('/', createUser);
routerUser.post('/login', login);
routerUser.get('/info', authentication, getUserInfo);

module.exports = routerUser;
