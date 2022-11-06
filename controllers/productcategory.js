/**
 * =================================================================
 * CONTROLLER FILE FOR ITEMS MODEL
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
const { productCategoryModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of items
const getProductCategorys = async (req, res) => {
  try {
    const data = await productCategoryModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get product details
const getProductCategory = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productCategoryModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert product
const createProductCategory = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await productCategoryModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update product
const updateProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await productCategoryModel.findOne({
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
const deleteProductCategory = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productCategoryModel.destroy({
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
  getProductCategorys,
  getProductCategory,
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
};
