const express = require('express');
// const { authentication } = require('../../middlewares');
const controller = require('./index');

const routerUser = express.Router({ mergeParams: true });

routerUser.post('/', controller.createUser);
routerUser.post('/login', controller.login);

module.exports = routerUser;