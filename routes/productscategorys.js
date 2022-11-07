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

//Get Middleware functions for checkAuth
const checkAuth  = require("../middleware/session");
//Get Middleware functions for check idRol permission 
const authIdRol = require("../middleware/roleAuth"); 


//Get items list 
router.get('/', checkAuth, authIdRol([1,2,3]),getProductCategorys);

//Get item details
router.get('/:id', checkAuth, authIdRol([1,2,3]),validatorIdProductCategory ,getProductCategory);
//Create item
router.post('/', checkAuth, authIdRol([1,2,3]), validatorCreateProductCategory ,createProductCategory);
//Update item
router.put('/:id', checkAuth, authIdRol([1,2]),validatorIdProductCategory, validatorCreateProductCategory, updateProductCategory);
//Delete item
router.delete('/:id', checkAuth, authIdRol([1]),validatorIdProductCategory,deleteProductCategory);

module.exports = router;