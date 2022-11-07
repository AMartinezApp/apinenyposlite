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
const { receiptDetailModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Receipt Detail
const getReceiptDetails = async (req, res) => {
  try {
    const data = await receiptDetailModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Receipt Detail details
const getReceiptDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await receiptDetailModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert Receipt Detail
const createReceiptDetail = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await receiptDetailModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Receipt Detail
const updateReceiptDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await receiptDetailModel.findOne({
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

//Delete Receipt Detail
const deleteReceiptDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await receiptDetailModel.destroy({
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
  getReceiptDetails,
  getReceiptDetail,
  createReceiptDetail,
  updateReceiptDetail,
  deleteReceiptDetail,
};
