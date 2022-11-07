/**
 * =================================================================
 * Validating ProductsModel
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
const validatorCreateSetting = [
  check("name").exists().notEmpty(),
  check("phone").exists().notEmpty(),
  check("email").exists().notEmpty(),
  check("address").exists().notEmpty(),
  check("city").exists().notEmpty(),
  check("identity").exists().notEmpty(),
  check("note_sales").exists().notEmpty(),
  check("note_receipts").exists().notEmpty(),
  check("footer").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

//Validate when get, delete and update product id exists
const validatorIdSetting = [
  check("id").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateSetting, validatorIdSetting };