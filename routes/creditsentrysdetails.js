/**
 * =================================================================
 * ROUTE FILE FOR CREDIT ENTRY DETAIL MODEL
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
  getCreditEntryDetails,
  getCreditEntryDetail,
  createCreditEntryDetail,
  updateCreditEntryDetail,
  deleteCreditEntryDetail,
} = require("../controllers/creditentrydetail");

//Gets validation functions
const {
  validatorCreateCreditEntryDetail,
  validatorIdCreditEntryDetail,
} = require("../validators/creditentrydetail");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get CreditEntryDetail list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getCreditEntryDetails);

//Get CreditEntryDetail details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdCreditEntryDetail,
  getCreditEntryDetail
);
//Create CreditEntryDetail
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateCreditEntryDetail,
  createCreditEntryDetail
);
//Update CreditEntryDetail
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdCreditEntryDetail,
  validatorCreateCreditEntryDetail,
  updateCreditEntryDetail
);
//Delete CreditEntryDetail
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdCreditEntryDetail,
  deleteCreditEntryDetail
);

module.exports = router;
