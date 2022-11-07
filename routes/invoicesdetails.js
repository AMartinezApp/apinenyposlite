/**
 * =================================================================
 * ROUTE FILE FOR INVOICES DETAILS MODEL
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
  getInvoiceDetails,
  getInvoiceDetail,
  createInvoiceDetail,
  updateInvoiceDetail,
  deleteInvoiceDetail,
} = require("../controllers/invoicedetail");

//Gets validation functions
const {
  validatorCreateInvoiceDetail,
  validatorIdInvoiceDetail,
} = require("../validators/invoicedetail");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getInvoiceDetails);

//Get invoice detail details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdInvoiceDetail,
  getInvoiceDetail
);
//Create invoice detail
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateInvoiceDetail,
  createInvoiceDetail
);
//Update invoice detail
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdInvoiceDetail,
  validatorCreateInvoiceDetail,
  updateInvoiceDetail
);
//Delete invoice detail
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdInvoiceDetail,
  deleteInvoiceDetail
);

module.exports = router;
