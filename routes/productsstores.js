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
  getProductStores,
  getProductStore,
  createProductStore,
  updateProductStore,
  deleteProductStore,
} = require("../controllers/productstore");

//Gets validation functions
const {
  validatorCreateProductStore,
  validatorIdProductStore,
} = require("../validators/productstore");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get stores list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getProductStores);

//Get store details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdProductStore,
  getProductStore
);
//Create store
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorCreateProductStore,
  createProductStore
);
//Update store
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdProductStore,
  validatorCreateProductStore,
  updateProductStore
);
//Delete store
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdProductStore,
  deleteProductStore
);

module.exports = router;
