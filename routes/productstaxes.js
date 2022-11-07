/**
 * =================================================================
 * ROUTE FILE FOR PRODUCTS STORES MODEL
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
  getProductTaxs,
  getProductTax,
  createProductTax,
  updateProductTax,
  deleteProductTax,
} = require("../controllers/producttax");

//Gets validation functions
const {
  validatorCreateProductTax,
  validatorIdProductTax,
} = require("../validators/producttax");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get items list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getProductTaxs);

//Get item details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdProductTax,
  getProductTax
);
//Create item
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateProductTax,
  createProductTax
);
//Update item
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdProductTax,
  validatorCreateProductTax,
  updateProductTax
);
//Delete item
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdProductTax,
  deleteProductTax
);

module.exports = router;
