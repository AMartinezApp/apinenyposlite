/** 
 * =================================================================
 * ID ROL CONTROLLER PERMISSION
 * =================================================================
 * @author AMartínezDev, I.E.R.L 
 * @copyright Copyright (c) 2021-2030   
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api           
 * */


//Get the errors helper
const { handleHttpError } = require("../utils/handleError");
 
/**
 * Array of idRol with permissions
 * @param {*} idRol 
 * @returns 
 */
const allowRole = (idRoles) => async (req, res, next) => {
    try {
         
        const {idrole}=req.user; //Search the idrole of user from req on session.js checkAuth 
        console.log(idrole);
        
        //Compare idRoles permissions with the idrole user
        if([].concat(idRoles).includes(idrole)){ 
            next();
        }else{
            handleHttpError(res, "ACCESS_DENIED",409);
            return;
        } 

        
    } catch (e) {
        handleHttpError(res, "ERROR_PERMISSIONS",403);
    }
    
};

module.exports = allowRole ;