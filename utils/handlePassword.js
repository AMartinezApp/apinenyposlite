/**
 * =================================================================
 * HANDLE FOR ENCRYPTION PASSWORD 
 * =================================================================
 * @author AMartínezDev, I.E.R.L
 * @copyright Copyright (c) 2021-2030
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api
 * */

//Get libs for encrypting and decrypting data
const bcryptjs = require("bcryptjs");

//Encrypting passwordPlain
const encrypt = async (passwordPlain) => {
  return await bcryptjs.hash(passwordPlain, 10);
};

//Passing encrypted password and plaintext for compare
const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};

//Exporting modules
module.exports = { compare, encrypt };
