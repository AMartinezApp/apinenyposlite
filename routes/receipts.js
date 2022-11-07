/**
 * =================================================================
 * ROUTE FILE FOR INVOICES MODEL
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
  getReceipts,
  getReceipt,
  createReceipt,
  updateReceipt,
  deleteReceipt,
} = require("../controllers/receipt");

//Gets validation functions
const {
  validatorCreateReceipt,
  validatorIdReceipt,
} = require("../validators/receipt");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getReceipts);

//Get Receipt details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdReceipt,
  getReceipt
);
//Create Receipt
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateReceipt,
  createReceipt
);
//Update Receipt
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdReceipt,
  validatorCreateReceipt,
  updateReceipt
);
//Delete Receipt
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdReceipt,
  deleteReceipt
);

module.exports = router;
