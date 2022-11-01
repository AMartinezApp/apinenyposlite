/** 
 * =================================================================
 * Validating itemsModel
 * =================================================================
 * @author AMartínezDev, I.E.R.L 
 * @copyright Copyright (c) 2021-2030   
 * @name NenyPos_Madera   
 * @version 1.0
 * @link http://amartinezdev.com/nenypos/api     
 * */

const { check } = require("express-validator");

//Handle Validator errors
const validateResults = require("../utils/handleValidator")

//Validate when are creating
const validatorCreateItem =[
    check("name").exists().notEmpty(),
    check("barcode").exists().notEmpty(),
    check("iditemcategory").exists().notEmpty().isNumeric(),
    check("idtax").exists().notEmpty().isNumeric(),
    check("cost").exists().notEmpty().isNumeric(),
    check("price").exists().notEmpty().isNumeric(),
    check("iditemstore").exists().notEmpty().isNumeric(),
    check("iduser").exists().notEmpty().isNumeric(),
    check("status").exists().notEmpty(),
    (req, res, next) =>{
        return validateResults(req, res, next);
    }
];

//Validate when get, delete and update item id exists
const validatorIdItem =[
    check("id").exists().notEmpty().isNumeric(),
    (req, res, next) =>{
        return validateResults(req, res, next);
    }
];

module.exports = { validatorCreateItem , validatorIdItem};