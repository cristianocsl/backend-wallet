const express = require('express');
const controllerUser = require('./index');

const routerUser = express.Router({ mergeParams: true });

controllerUser.userRegister(routerUser);

module.exports = (root) => {
  root.use('/users', routerUser);
};