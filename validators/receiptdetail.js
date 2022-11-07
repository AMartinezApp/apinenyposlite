/**
 * =================================================================
 * Validating Receipt Detail
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
const validatorCreateReceiptDetail = [
  check("idreceipt").exists().notEmpty().isNumeric(),
  check("amount").exists().notEmpty().isNumeric(),
  check("idtypedoc").exists().notEmpty().isNumeric(),
  check("typedoc").exists().notEmpty(),
   
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

//Validate when get, delete and update with id exists
const validatorIdReceiptDetail = [
  check("id").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateReceiptDetail, validatorIdReceiptDetail };