/**
 * =================================================================
 * CONTROLLER FILE FOR RECEIPT MODEL
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
const { receiptModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Receipt
const getReceipts = async (req, res) => {
  try {
    const data = await receiptModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Receipt details
const getReceipt = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await receiptModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert Receipt
const createReceipt = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await receiptModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Receipt
const updateReceipt = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await receiptModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });

    data.set(body);
    data.save();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Delete Receipt
const deleteReceipt = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await receiptModel.destroy({
      where: {
        id,
      },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = {
  getReceipts,
  getReceipt,
  createReceipt,
  updateReceipt,
  deleteReceipt,
};
