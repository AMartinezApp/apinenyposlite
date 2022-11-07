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
  getSettings,
  getSetting,
  createSetting,
  updateSetting,
  deleteSetting,
} = require("../controllers/setting");

//Gets validation functions
const {
  validatorCreateSetting,
  validatorIdSetting,
} = require("../validators/setting");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get setting list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getSettings);


//Get setting details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]), 
  validatorIdSetting,
  getSetting
);
//Create setting
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateSetting,
  createSetting
);
//Update setting
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdSetting,
  validatorCreateSetting,
  updateSetting
);
//Delete setting
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdSetting,
  deleteSetting
);

module.exports = router;
