/**
 * =================================================================
 * Validating Purchase Detail
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
const validatorCreatePurchaseDetail = [
  check("idpurchase").exists().notEmpty().isNumeric(),
  check("idproduct").exists().notEmpty().isNumeric(),
  check("productdetail").exists().notEmpty(),
  check("idtax").exists().notEmpty().isNumeric(),
  check("quantity").exists().notEmpty().isNumeric(),
  check("cost").exists().notEmpty().isNumeric(),
  check("discount").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

//Validate when get, delete and update with id exists
const validatorIdPurchaseDetail = [
  check("id").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreatePurchaseDetail, validatorIdPurchaseDetail };
