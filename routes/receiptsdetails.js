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
  getReceiptDetails,
  getReceiptDetail,
  createReceiptDetail,
  updateReceiptDetail,
  deleteReceiptDetail,
} = require("../controllers/receiptdetail");

//Gets validation functions
const {
  validatorCreateReceiptDetail,
  validatorIdReceiptDetail,
} = require("../validators/receiptdetail");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getReceiptDetails);

//Get ReceiptDetail details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdReceiptDetail,
  getReceiptDetail
);
//Create ReceiptDetail
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateReceiptDetail,
  createReceiptDetail
);
//Update ReceiptDetail
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdReceiptDetail,
  validatorCreateReceiptDetail,
  updateReceiptDetail
);
//Delete ReceiptDetail
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdReceiptDetail,
  deleteReceiptDetail
);

module.exports = router;
