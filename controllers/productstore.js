/**
 * =================================================================
 * CONTROLLER FILE FOR PRODUCT STORE MODEL
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
const { productStorageModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of products stores 
const getProductStores = async (req, res) => {
  try {
    const data = await productStorageModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get product store details
const getProductStore = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productStorageModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert product store
const createProductStore = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await productStorageModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update product store
const updateProductStore = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await productStorageModel.findOne({
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

//Delete product
const deleteProductStore = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productStorageModel.destroy({
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
  getProductStores,
  getProductStore,
  createProductStore,
  updateProductStore,
  deleteProductStore,
};
