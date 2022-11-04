 /** 
 * =================================================================
 * ROUTE FILE FOR PRODUCT MODEL
 * =================================================================
 * @author AMartínezDev, I.E.R.L 
 * @copyright Copyright (c) 2021-2030   
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api           
 * */

const express = require('express');
const router = express.Router();

//Gets controllers functions
const { getProductCategorys,
    getProductCategory,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory } = require("../controllers/productcategory");

//Gets validation functions
const { validatorCreateProductCategory, validatorIdProductCategory } = require("../validators/productcategory");

//Gets Middleware functions
/**
 * Tenemos pendiendente aplicar este middleware
 */
const { checkAuth } = require("../middleware/session");

//Get items list 
router.get('/', getProductCategorys);

//Get item details
router.get('/:id', validatorIdProductCategory ,getProductCategory);
//Create item
router.post('/', validatorCreateProductCategory ,createProductCategory);
//Update item
router.put('/:id', validatorIdProductCategory, validatorCreateProductCategory, updateProductCategory);
//Delete item
router.delete('/:id', validatorIdProductCategory,deleteProductCategory);

module.exports = router;