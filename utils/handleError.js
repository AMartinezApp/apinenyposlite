/** 
 * =================================================================
 * HANDLE FOR RETURN ERROR VALIDATOR
 * =================================================================
 * @author AMartínezDev, I.E.R.L 
 * @copyright Copyright (c) 2021-2030   
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api           
 * */

const handleHttpError = (res, message='Algo sucedio', code=403) => {
    res.status(code);
    res.send({error:message});
};

module.exports = {handleHttpError};