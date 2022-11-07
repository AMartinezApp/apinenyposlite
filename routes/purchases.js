/**
 * =================================================================
 * ROUTE FILE FOR USER ROL MODEL
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
  getPurchases,
  getPurchase,
  createPurchase,
  updatePurchase,
  deletePurchase,
} = require("../controllers/purchase");

//Gets validation functions
const {
  validatorCreatePurchase,
  validatorIdPurchase,
} = require("../validators/purchase");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getPurchases);


//Get purchase details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]), 
  validatorIdPurchase,
  getPurchase
);
//Create purchase
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreatePurchase,
  createPurchase
);
//Update purchase
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdPurchase,
  validatorCreatePurchase,
  updatePurchase
);
//Delete purchase
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdPurchase,
  deletePurchase
);

module.exports = router;
