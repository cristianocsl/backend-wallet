const express = require('express');
const routerUser = require('./users/routerUser');
const routerExpense = require('./expense/routerExpense');

const root = express.Router({ mergeParams: true });

root.use('/users', routerUser);
root.use('/expense', routerExpense);

module.exports = root;