/**
 * =================================================================
 * CONTROLLER FILE FOR USER MODEL
 * =================================================================
 * @author AMartínezDev, I.E.R.L
 * @copyright Copyright (c) 2021-2030
 * @license http://opensource.org/licenses/
 * @version $Revision: 1
 * @link http://amartinezdev.com/nenypos/api
 * */

//Get validator marchedData
const { matchedData } = require("express-validator");
//Get the model instance
const { userModel } = require("../models");
//Get the errors
const { handleHttpError } = require("../utils/handleError");
//Get libs for encrypt data
const { compare, encrypt } = require("../utils/handlePassword");
//Get functions for token
const { singToken } = require("../utils/handleJwt");

/**
 * Login user
 * @param {*} req
 * @param {*} res
 * @returns
 */
const loginUser = async (req, res) => {
  try {
    const body = matchedData(req);
    const { email } = body;

    const user = await userModel.findOne({
      where: { email },
    });

    if (!user) {
      res.status(401).send({ 
        result: 'CREDENTIALS_INVALID',
        status: 'error'
      } );
      return;
    }
    const checkPassword = await compare(body.password, user.password);

    if (!checkPassword) { 
       
      res.status(401).send({ 
        result: 'CREDENTIALS_INVALID',
        status: 'error'
      } );
      return;
    }

    const tokenJwt = await singToken(user);

    user.set("password", undefined, { strict: false }); //Do not return password
    const data = {
      token: tokenJwt,
      user: user,
    };

    //
     
    res.send(data );
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const getUsers = async (req, res) => {
  try {
    const data = await userModel.find({});
    data.set("password", undefined, { strict: false }); //Do not return password
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Get an user details
 * @param {*} req
 * @param {*} res
 */
const getUser = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    console.log(id);
    const data = await userModel.findOne({ [propertiesKey.id]: id });
    data.set("password", undefined, { strict: false }); //Do not return password
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Create a user
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password); //Encrypt password
    const body = { ...req, password };

    const dataUser = await userModel.create(body); //Create user

    dataUser.set("password", undefined, { strict: false }); //Do not return password
    const data = {
      token: await singToken(dataUser),
      user: dataUser,
    };
    
    
    res.send({ data }); //Return data

  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Update an user
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
  try {
    /**
     * Get:
     * {
     * id: id of user to update
     * }
     *
     * {
     * body: details of user to update
     * }
     */
    const { id, ...body } = matchedData(req);
    const data = await userModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Delete an user
 * @param {*} req
 * @param {*} res
 */
const deleteUser = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await userModel.deleteOne({ where: id });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
