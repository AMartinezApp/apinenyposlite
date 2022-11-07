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
const { productTaxModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of products taxs 
const getProductTaxs = async (req, res) => {
  try {
    const data = await productTaxModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get product tax details
const getProductTax = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productTaxModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert product tax
const createProductTax = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await productTaxModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update product tax
const updateProductTax = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await productTaxModel.findOne({
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

//Delete product tax
const deleteProductTax = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productTaxModel.destroy({
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
  getProductTaxs,
  getProductTax,
  createProductTax,
  updateProductTax,
  deleteProductTax,
};
