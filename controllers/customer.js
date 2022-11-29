/**
 * =================================================================
 * CONTROLLER FILE FOR CUSTOMER MODEL
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
const { customerModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Customer
const getCustomers = async (req, res) => {
  try {
    const data = await customerModel.findAll({
      where: { status: "A" },
      order: [["name", "ASC"]],
    });
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Customer details
const getCustomer = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await customerModel.findOne({
      where: { id, status: "A" },
      order: [["name", "ASC"]],
    });
    if (!data)
      return res
        .status(404)
        .send({ result: "Document not found", status: "error" });
    res.status(200).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert Customer
const createCustomer = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await customerModel.create(body);
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Customer
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await customerModel.findOne({
      where: { id },
    });
    if (!data)
      return res
        .status(404)
        .send({ result: "Document not found", status: "error" });

    data.set(body);
    data.save();
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Delete Customer
const deleteCustomer = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await customerModel.destroy({
      where: {
        id,
      },
    });
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
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
