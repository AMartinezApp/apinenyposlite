/**
 * =================================================================
 * ROUTE FILE FOR SUPPLIER MODEL
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
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplier");

//Gets validation functions
const {
  validatorCreateSupplier,
  validatorIdSupplier,
} = require("../validators/supplier");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get Supplier list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getSuppliers);

//Get Supplier details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdSupplier,
  getSupplier
);
//Create Supplier
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateSupplier,
  createSupplier
);
//Update Supplier
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdSupplier,
  validatorCreateSupplier,
  updateSupplier
);
//Delete Supplier
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdSupplier,
  deleteSupplier
);

module.exports = router;
