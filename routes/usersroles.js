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
  getUserRols,
  getUserRol,
  createUserRol,
  updateUserRol,
  deleteUserRol,
} = require("../controllers/userrol");

//Gets validation functions
const {
  validatorCreateUserRol,
  validatorIdUserRol,
} = require("../validators/userrol");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get user rol list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getUserRols);

//Get user rol details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdUserRol,
  getUserRol
);
//Create user rol
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateUserRol,
  createUserRol
);
//Update user rol
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdUserRol,
  validatorCreateUserRol,
  updateUserRol
);
//Delete user rol
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdUserRol,
  deleteUserRol
);

module.exports = router;
