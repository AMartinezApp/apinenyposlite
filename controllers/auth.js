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
const { userModel, userRoleModel } = require("../models");
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
      where: { email, status: "A" }
    });

    if (!user) {
      res.status(401).send({
        result: "CREDENTIALS_INVALID",
        status: "error",
      });
      return;
    }
    const checkPassword = await compare(body.password, user.password);

    if (!checkPassword) {
      res.status(401).send({
        result: "CREDENTIALS_INVALID",
        status: "error",
      });
      return;
    }

    const tokenJwt = await singToken(user);

    user.set("password", undefined, { strict: false }); //Do not return password
    const data = {
      token: tokenJwt,
      user: user,
    };

    //

    res.send(data);
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
    const data = await userModel.findAll({
      include: [{ model: userRoleModel, attributes: ["id", "name"] }],
      attributes: [
        "id",
        "name",
        "phone",
        "email",
        "status",
        "createdAt",
        "updatedAt",
      ],
      where: { status: "A" },
      order: [["name", "ASC"]],
    });
    console.log(data);

    res.status(200).send(data);
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

    const data = await userModel.findOne({ [propertiesKey.id]: id });

    data.set("password", undefined, { strict: false });
    if (!data)
      return res
        .status(404)
        .send({ result: "Document not found", status: "error" });
    res.status(200).send(data);
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
    // req = matchedData(req.body); ver porqué esto estaba funcionando y luego no
    const password = await encrypt(req.body.password); //Encrypt password

    const body = { ...req.body, password };

    const dataUser = await userModel.create(body); //Create user

    dataUser.set("password", undefined, { strict: false }); //Do not return password
    const data = {
      token: await singToken(dataUser),
      user: dataUser,
    };

    res.status(201).send(data);
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
    const { id, ...body } = matchedData(req);
    const data = await userModel.findOneAndUpdate(id, body);
    if (!data)
      return res.status(404).send({ result: "Document not found", status: "error" });
    res.status(201).send(data);
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
    if (!data)
      return res
        .status(404)
        .send({ result: "Document not found", status: "error" });
    res.status(200).send(data);
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
