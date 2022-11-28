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
  getUsers,
  updateUser
} = require("../controllers/auth");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Gets validation functions
const {
  validatorCreateUser,
  validatorLogin,
} = require("../validators/auth");

//Get user list
router.get("/users", checkAuth, authIdRol([1, 2, 3]), getUsers)

router.put("/users/:id", checkAuth, authIdRol([1, 2]), updateUser)

//Create user checkAuth, authIdRol([1, 2, 3]), validatorCreateUser,
router.post("/register",  createUser);

//Login user
router.post("/login", validatorLogin, loginUser);

module.exports = router;
