/**
 * =================================================================
 * Validating usersModel
 * =================================================================
 * @author AMartínezDev, I.E.R.L
 * @copyright Copyright (c) 2021-2030
 * @name NenyPos_Madera
 * @version 1.0
 * @link http://amartinezdev.com/nenypos/api
 * */

const { check } = require("express-validator");

//Handle Validator errors
const validateResults = require("../utils/handleValidator");

//Validate when are creating
const validatorCreateUser = [
  check("name").exists().notEmpty().isLength({ min: 4, max: 50 }),
  check("phone").exists().notEmpty().isLength({ min: 4, max: 50 }),
  check("email").exists().notEmpty().isEmail().isLength({ min: 4, max: 50 }),
  check("password").exists().notEmpty().isLength({ min: 4, max: 500 }),
  check("idrole").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

//Validate when are login
const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 4, max: 500 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

//Validate when get, delete and update User exists
const validatorIdUser = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateUser, validatorIdUser, validatorLogin };
