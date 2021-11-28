const express = require('express');
const userRouter = require('./users/routerUser');

const root = express.Router({ mergeParams: true });

userRouter(root);

module.exports = (app) => {
  app.use('/', root);
};