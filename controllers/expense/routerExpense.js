const express = require('express');
const { authentication } = require('../../middlewares');
const { createExpense } = require('./index');

const routerExpense = express.Router({ mergeParams: true });

routerExpense.post('/', authentication, createExpense);

module.exports = routerExpense;