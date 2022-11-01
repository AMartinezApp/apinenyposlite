/** 
 * =================================================================
 * HANDLE FOR GENERATED JSON WEB TOKEN STR
 * =================================================================
 * @author AMartínezDev, I.E.R.L 
 * @copyright Copyright (c) 2021-2030   
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api           
 * */
//Get libs from jsonwebtoken
const jwt = require("jsonwebtoken");
const { updateLanguageServiceSourceFile } = require("typescript");
const JWT_SECRET =  process.env.JWT_SECRET;
const getProperties  = require("../utils/handlePropEngine");
const propertiesKey = getProperties();

/**
 * Pasing token string user
 * ----------------------------------------------------------------
 * singing user token string
 * @param {*} user
 */
const singToken= async (user)=>{
    const sing = jwt.sign(
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn: "8h",
        }
    )
    return sing;
};

/**
 * Pasing token session
 * @param {*} tokenJwt
 */
const verifyToken = async (tokenJwt)=>{
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (e) {
       // return null;
    }
};


module.exports = { singToken, verifyToken };