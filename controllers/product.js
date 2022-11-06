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
const {
  productModel,
  productCategoryModel,
  productStorageModel,
  productTaxModel,
} = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of items
const getProducts = async (req, res) => {
  try {
    const data = await productModel.findAll({
      include: [
        { model: productCategoryModel, attributes: ["name"] },
        { model: productStorageModel, attributes: ["name"] },
        { model: productTaxModel, attributes: ["name"] },
      ],
      attributes: [
        "id",
        "barcode",
        "name",
        "cost",
        "price",
        "status",
        "createdAt",
        "updatedAt",
      ],
    });
    const user = req.user;
    res.send({ data, user });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get product details
const getProduct = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productModel.findOne({
      where: { id },
      include: [
        { model: productCategoryModel, attributes: ["name"] },
        { model: productStorageModel, attributes: ["name"] },
        { model: productTaxModel, attributes: ["name"] },
      ],
      attributes: [
        "id",
        "barcode",
        "name",
        "cost",
        "price",
        "status",
        "createdAt",
        "updatedAt",
      ],
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert product
const createProduct = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await productModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await productModel.findOne({
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
const deleteProduct = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productModel.destroy({
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
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
