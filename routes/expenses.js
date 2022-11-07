/**
 * =================================================================
 * ROUTE FILE FOR EXPENSES MODEL
 * =================================================================
 * @author AMartínezDev, I.E.R.L
 * @copyright Copyright (c) 2021-2030
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api
 * */

const express = require("express");
const router = express.Router();

//Gets controllers functions
const {
  getExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expense");

//Gets validation functions
const {
  validatorCreateExpense,
  validatorIdExpense,
} = require("../validators/expense");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getExpenses);

//Get Expense details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdExpense,
  getExpense
);
//Create Expense
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateExpense,
  createExpense
);
//Update Expense
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdExpense,
  validatorCreateExpense,
  updateExpense
);
//Delete Expense
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdExpense,
  deleteExpense
);

module.exports = router;
