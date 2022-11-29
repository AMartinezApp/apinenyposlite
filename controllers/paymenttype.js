/**
 * =================================================================
 * CONTROLLER FILE FOR PAYMENT TYPE MODEL
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
const { paymentTypeModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Payment Types 
const getPaymentTypes = async (req, res) => {
  try {
    const data = await paymentTypeModel.findAll({
      where: { status: "A" },
      order: [["name", "ASC"]],
    });
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Payment Type details
const getPaymentType = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await paymentTypeModel.findOne({
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

//Insert Payment Type
const createPaymentType = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await paymentTypeModel.create(body);
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Payment Type
const updatePaymentType = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await paymentTypeModel.findOne({
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

//Delete Payment Type
const deletePaymentType = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await paymentTypeModel.destroy({
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
  getPaymentTypes,
  getPaymentType,
  createPaymentType,
  updatePaymentType,
  deletePaymentType,
};
