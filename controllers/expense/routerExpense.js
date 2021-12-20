const express = require('express');
const { authentication } = require('../../middlewares');
const { createExpense } = require('./index');
const { updateExpense } = require('.');

const routerExpense = express.Router({ mergeParams: true });

routerExpense.post('/', authentication, createExpense);
routerExpense.put('/:id', authentication, updateExpense);

module.exports = routerExpense;
