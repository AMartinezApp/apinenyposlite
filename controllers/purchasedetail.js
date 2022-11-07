/**
 * =================================================================
 * CONTROLLER FILE FOR PURCHASE DETAIL MODEL
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
const { purchaseDetailModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of purchase details
const getPurchaseDetails = async (req, res) => {
  try {
    const data = await purchaseDetailModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get purchase detail
const getPurchaseDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await purchaseDetailModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert purchase detail
const createPurchaseDetail = async (req, res) => {
  try {
    const body = matchedData(req);
    
    const data = await purchaseDetailModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update purchase detail
const updatePurchaseDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await purchaseDetailModel.findOne({
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

//Delete purchase detail
const deletePurchaseDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await purchaseDetailModel.destroy({
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
  getPurchaseDetails,
  getPurchaseDetail,
  createPurchaseDetail,
  updatePurchaseDetail,
  deletePurchaseDetail,
};
