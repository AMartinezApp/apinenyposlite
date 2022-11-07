/**
 * =================================================================
 * ROUTE FILE FOR EXPENSE DETAILS MODEL
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
  getExpenseDetails,
  getExpenseDetail,
  createExpenseDetail,
  updateExpenseDetail,
  deleteExpenseDetail,
} = require("../controllers/expensedetail");

//Gets validation functions
const {
  validatorCreateExpenseDetail,
  validatorIdExpenseDetail,
} = require("../validators/expensedetail");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get ExpenseDetail list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getExpenseDetails);

//Get ExpenseDetail details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdExpenseDetail,
  getExpenseDetail
);
//Create ExpenseDetail
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateExpenseDetail,
  createExpenseDetail
);
//Update ExpenseDetail
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdExpenseDetail,
  validatorCreateExpenseDetail,
  updateExpenseDetail
);
//Delete ExpenseDetail
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdExpenseDetail,
  deleteExpenseDetail
);

module.exports = router;
