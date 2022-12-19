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

const handleHttpError = (res, message = "INTERNAL_ERROR", code = 404) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };
