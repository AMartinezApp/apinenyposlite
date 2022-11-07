/**
 * =================================================================
 * ROUTE FILE FOR CUSTOMER MODEL
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
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer");

//Gets validation functions
const {
  validatorCreateCustomer,
  validatorIdCustomer,
} = require("../validators/customer");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getCustomers);

//Get Customer details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdCustomer,
  getCustomer
);
//Create Customer
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateCustomer,
  createCustomer
);
//Update Customer
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdCustomer,
  validatorCreateCustomer,
  updateCustomer
);
//Delete Customer
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdCustomer,
  deleteCustomer
);

module.exports = router;
