/**
 * =================================================================
 * CONTROLLER FILE FOR PURCHASE MODEL
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
const { purchaseModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of purchase
const getPurchases = async (req, res) => {
  try {
    const data = await purchaseModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get purchase details
const getPurchase = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await purchaseModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert purchase
const createPurchase = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await purchaseModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update purchase
const updatePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await purchaseModel.findOne({
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

//Delete purchase
const deletePurchase = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await purchaseModel.destroy({
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
  getPurchases,
  getPurchase,
  createPurchase,
  updatePurchase,
  deletePurchase,
};
