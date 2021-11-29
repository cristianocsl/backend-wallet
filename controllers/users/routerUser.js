const express = require('express');
const controllerUser = require('./index');

const routerUser = express.Router({ mergeParams: true });

controllerUser.userRegister(routerUser);
controllerUser.userLogin(routerUser);

module.exports = (root) => {
  root.use('/user', routerUser);
};