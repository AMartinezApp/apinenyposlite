/**
 * =================================================================
 * ROUTE FILE FOR REVENUE MODEL
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
  getRevenues,
  getRevenue,
  createRevenue,
  updateRevenue,
  deleteRevenue,
} = require("../controllers/revenue");

//Gets validation functions
const {
  validatorCreateRevenue,
  validatorIdRevenue,
} = require("../validators/revenue");

//Get Middleware functions for checkAuth
const checkAuth = require("../middleware/session");
//Get Middleware functions for check idRol permission
const authIdRol = require("../middleware/roleAuth");

//Get Revenue list
router.get("/", checkAuth, authIdRol([1, 2, 3]), getRevenues);

//Get Revenue details
router.get(
  "/:id",
  checkAuth,
  authIdRol([1, 2, 3]),
  validatorIdRevenue,
  getRevenue
);
//Create Revenue
router.post(
  "/",
  checkAuth,
  authIdRol([1, 2]),
  validatorCreateRevenue,
  createRevenue
);
//Update Revenue
router.put(
  "/:id",
  checkAuth,
  authIdRol([1, 2]),
  validatorIdRevenue,
  validatorCreateRevenue,
  updateRevenue
);
//Delete Revenue
router.delete(
  "/:id",
  checkAuth,
  authIdRol([1]),
  validatorIdRevenue,
  deleteRevenue
);

module.exports = router;
