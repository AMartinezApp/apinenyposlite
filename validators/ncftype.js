/**
 * =================================================================
 * Validating Ncf Type
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
const validatorCreateNcfType = [
  check("name").exists().notEmpty(),
  check("typedoc").exists().notEmpty(),
  check("prefix").exists().notEmpty(),
  check("inicial_num").exists().notEmpty().isNumeric(),
  check("final_num").exists().notEmpty().isNumeric(),
  check("current_num").exists().notEmpty().isNumeric(),
  check("expiration").exists().notEmpty().isDate(), 

  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

//Validate when get, delete and update with id exists
const validatorIdNcfType = [
  check("id").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateNcfType, validatorIdNcfType };
