/**
 * =================================================================
 * ROUTE FILE FOR AUTH USERS_MODEL
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
  createUser,
  loginUser,
} = require("../controllers/auth");

//Gets validation functions
const {
  validatorCreateUser,
  validatorLogin,
} = require("../validators/auth");

//Create user
router.post("/register", validatorCreateUser, createUser);

//Login user
router.post("/login", validatorLogin, loginUser);

module.exports = router;
