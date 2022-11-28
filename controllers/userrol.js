/**
 * =================================================================
 * CONTROLLER FILE FOR USER ROL MODEL
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
const { userRoleModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of  user rol
const getUserRols = async (req, res) => {
  try {
    const data = await userRoleModel.findAll();
    res.status(200).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get user rol  details
const getUserRol = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await userRoleModel.findOne({
      where: { id },
    });
    if (!data)
        return res.status(404).send({ result: 'Document not found',status: 'error'} );
    res.send( data );
    res.status(200).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert user rol
const createUserRol = async (req, res) => {
  // try {
  //   const body = matchedData(req);
  //   const data = await userRoleModel.create(body);
  //   res.send({ data });
  // } catch (e) {
  //   handleHttpError(res, e);
  // }
};

//Update user rol
const updateUserRol = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const body = req.body;
  //   const data = await userRoleModel.findOne({
  //     where: { id },
  //   });
  //   if (!data)
  //     return res.status(404).json({ message: "document does not exists" });

  //   data.set(body);
  //   data.save();
  //   res.send({ data });
  // } catch (e) {
  //   handleHttpError(res, e);
  // }
};

//Delete user rol
const deleteUserRol = async (req, res) => {
  // try {
  //   req = matchedData(req);
  //   const { id } = req;
  //   const data = await userRoleModel.destroy({
  //     where: {
  //       id,
  //     },
  //   });
  //   if (!data)
  //     return res.status(404).json({ message: "document does not exists" });
  //   res.send({ data });
  // } catch (e) {
  //   handleHttpError(res, e);
  // }
};

module.exports = {
  getUserRols,
  getUserRol,
  createUserRol,
  updateUserRol,
  deleteUserRol,
};
