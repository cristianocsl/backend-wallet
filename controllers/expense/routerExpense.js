const express = require('express');
const { authentication } = require('../../middlewares');
const { createExpense } = require('.');
const { updateExpense } = require('.');
const { deleteExpense } = require('.');

const routerExpense = express.Router({ mergeParams: true });

routerExpense.post('/', authentication, createExpense);
routerExpense.put('/:id', authentication, updateExpense);
routerExpense.delete('/:id', authentication, deleteExpense);

module.exports = routerExpense;
