/** 
 * =================================================================
 * SESSION CONTROLLER
 * =================================================================
 * @author AMartínezDev, I.E.R.L 
 * @copyright Copyright (c) 2021-2030   
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api           
 * */
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

//Get the token helper
const { verifyToken } = require("../utils/handleJwt");

//Get the propertiesKey for dainaming id on db
const getProperties  = require("../utils/handlePropEngine");
const propertiesKey = getProperties();

//Get the model instance
const { usersModel } = require("../models");
 

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NOT_ALLOW", 409);
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);

    if (!tokenData) {
      handleHttpError(res, "NOT_ALLOW", 409);
      return;
    };

    const query = {
      [propertiesKey.id]:tokenData[propertiesKey.id]
    };

    const user = await usersModel.findOne({query});
    req.user = user;
    next();
    
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = checkAuth;
