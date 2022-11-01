/** 
 * =================================================================
 * ROUTE FILE FOR AUTH USERS_MODEL
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
 const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser } = require("../controllers/auth");
 
 //Gets validation functions
 const { validatorCreate, validatorIdItem , validatorLogin} = require("../validators/auth");
 

 //Get user list 
 //router.get('/', getUsers);
 
 //Get user details
 //router.get('/:id', validatorIdItem ,getUser);
 
 //Create user
 router.post('/register', validatorCreate ,createUser);

 //Login user
 router.post('/login', validatorLogin ,loginUser);

 //Update user
 //router.put('/:id', validatorIdItem, validatorCreate, updateUser);

 //Delete user
 //router.delete('/:id', validatorIdItem,deleteUser);
 
 module.exports = router