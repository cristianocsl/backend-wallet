const express = require('express');
const routerUser = require('./users/routerUser');

const root = express.Router({ mergeParams: true });

root.use('/users', routerUser);

module.exports = root;