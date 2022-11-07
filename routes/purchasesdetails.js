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
  getPurchaseDetails,
  getPurchaseDetail,
  createPurchaseDetail,
  updatePurchaseDetail,
  deletePurchaseDetail,
} = require("../controllers/purchasedetail");

//Gets validation functions
const {
  validatorCreatePurchaseDetail,
  validatorIdPurchaseDetail,
} = require("../validators/purchasedetail");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase Details list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getPurchaseDetails);


//Get purchase Detail details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]), 
  validatorIdPurchaseDetail,
  getPurchaseDetail
);
//Create purchase Detail
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreatePurchaseDetail,
  createPurchaseDetail
);
//Update purchase Detail
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdPurchaseDetail,
  validatorCreatePurchaseDetail,
  updatePurchaseDetail
);
//Delete purchase Detail
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdPurchaseDetail,
  deletePurchaseDetail
);

module.exports = router;
