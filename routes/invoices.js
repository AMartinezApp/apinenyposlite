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
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoice");

//Gets validation functions
const {
  validatorCreateInvoice,
  validatorIdInvoice,
} = require("../validators/invoice");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getInvoices);

//Get invoice details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdInvoice,
  getInvoice
);
//Create invoice
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateInvoice,
  createInvoice
);
//Update invoice
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdInvoice,
  validatorCreateInvoice,
  updateInvoice
);
//Delete invoice
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdInvoice,
  deleteInvoice
);

module.exports = router;
