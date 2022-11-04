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
const { 
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct } = require("../controllers/product");

//Gets validation functions
const { validatorCreateProduct, validatorIdProduct } = require("../validators/product");

//Get Middleware functions for checkAuth
const checkAuth  = require("../middleware/session");
//Get Middleware functions for check idRol permission 
const authIdRol = require("../middleware/roleAuth"); 


//Get products list 
router.get('/', checkAuth, authIdRol([1,2,3]),checkAuth, getProducts);

//Get product details
router.get('/:id', checkAuth, authIdRol([1,2,3]),validatorIdProduct, getProduct);

//Create product
router.post('/', checkAuth, authIdRol([1,2]), validatorCreateProduct, createProduct);

//Update product
router.put('/:id', checkAuth, authIdRol([1,2]), validatorIdProduct, validatorCreateProduct, updateProduct);

//Delete product
router.delete('/:id', checkAuth, authIdRol([1]), validatorIdProduct, deleteProduct);

module.exports = router;