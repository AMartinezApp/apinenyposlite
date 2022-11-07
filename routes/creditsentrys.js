/**
 * =================================================================
 * ROUTE FILE FOR CREDIT ENTRY MODEL
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
  getCreditEntrys,
  getCreditEntry,
  createCreditEntry,
  updateCreditEntry,
  deleteCreditEntry,
} = require("../controllers/creditentry");

//Gets validation functions
const {
  validatorCreateCreditEntry,
  validatorIdCreditEntry,
} = require("../validators/creditentry");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get CreditEntry list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getCreditEntrys);

//Get CreditEntry details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdCreditEntry,
  getCreditEntry
);
//Create CreditEntry
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateCreditEntry,
  createCreditEntry
);
//Update CreditEntry
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdCreditEntry,
  validatorCreateCreditEntry,
  updateCreditEntry
);
//Delete CreditEntry
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdCreditEntry,
  deleteCreditEntry
);

module.exports = router;
