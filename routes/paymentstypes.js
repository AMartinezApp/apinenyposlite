/**
 * =================================================================
 * ROUTE FILE FOR PAYMENT TYPE
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
  getPaymentTypes,
  getPaymentType,
  createPaymentType,
  updatePaymentType,
  deletePaymentType,
} = require("../controllers/paymenttype");

//Gets validation functions
const {
  validatorCreatePaymentType,
  validatorIdPaymentType,
} = require("../validators/paymenttype");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getPaymentTypes);

//Get PaymentType details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdPaymentType,
  getPaymentType
);
//Create PaymentType
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreatePaymentType,
  createPaymentType
);
//Update PaymentType
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdPaymentType,
  validatorCreatePaymentType,
  updatePaymentType
);
//Delete PaymentType
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdPaymentType,
  deletePaymentType
);

module.exports = router;
