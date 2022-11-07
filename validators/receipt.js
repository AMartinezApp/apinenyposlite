/**
 * =================================================================
 * Validating Receipt
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
const validatorCreateReceipt = [
  check("idcustomer").exists().notEmpty().isNumeric(),
  check("idpaymenttype").exists().notEmpty().isNumeric(),
  check("paymentdetails").exists().notEmpty(),
  check("iduser").exists().notEmpty().isNumeric(),
   
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

//Validate when get, delete and update with id exists
const validatorIdReceipt = [
  check("id").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateReceipt, validatorIdReceipt };
