 /** 
 * =================================================================
 * ROUTE FILE FOR ITEMS MODEL
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
const { getItems, getItem, create, update, deleteItem } = require("../controllers/items");

//Gets validation functions
const { validatorCreateItem, validatorIdItem } = require("../validators/items");

//Gets Middleware functions
/**
 * Tenemos pendiendente aplicar este middleware
 */
const { checkAuth } = require("../middleware/session");

//Get items list 
router.get('/', getItems);

//Get item details
router.get('/:id', validatorIdItem ,getItem);
//Create item
router.post('/', validatorCreateItem ,create);
//Update item
router.put('/:id', validatorIdItem, validatorCreateItem, update);
//Delete item
router.delete('/:id', validatorIdItem,deleteItem);

module.exports = router;