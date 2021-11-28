const express = require('express');
const getAll = require('./getAll');

const router = express.Router({ mergeParams: true });

getAll(router);

module.exports = (root) => {
  root.use('/users', router);
};