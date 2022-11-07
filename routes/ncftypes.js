/**
 * =================================================================
 * ROUTE FILE FOR NCF TYPES MODEL
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
  getNcfTypes,
  getNcfType,
  createNcfType,
  updateNcfType,
  deleteNcfType,
} = require("../controllers/ncftype");

//Gets validation functions
const {
  validatorCreateNcfType,
  validatorIdNcfType,
} = require("../validators/ncftype");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get purchase list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getNcfTypes);

//Get NcfType details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdNcfType,
  getNcfType
);
//Create NcfType
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateNcfType,
  createNcfType
);
//Update NcfType
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdNcfType,
  validatorCreateNcfType,
  updateNcfType
);
//Delete NcfType
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdNcfType,
  deleteNcfType
);

module.exports = router;
