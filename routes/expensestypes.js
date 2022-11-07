/**
 * =================================================================
 * ROUTE FILE FOR EXPENSE TYPE MODEL
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
  getExpenseTypes,
  getExpenseType,
  createExpenseType,
  updateExpenseType,
  deleteExpenseType,
} = require("../controllers/expensetype");

//Gets validation functions
const {
  validatorCreateExpenseType,
  validatorIdExpenseType,
} = require("../validators/expensetype");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get ExpenseType list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getExpenseTypes);

//Get ExpenseType details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdExpenseType,
  getExpenseType
);
//Create ExpenseType
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateExpenseType,
  createExpenseType
);
//Update ExpenseType
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdExpenseType,
  validatorCreateExpenseType,
  updateExpenseType
);
//Delete ExpenseType
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdExpenseType,
  deleteExpenseType
);

module.exports = router;
