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
        { model: productCategoryModel, attributes: ["id","name"] },
        { model: productStorageModel, attributes: ["id","name"] },
        { model: productTaxModel, attributes: ["id","name", "value"] },
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
      where: { status: "A" },
      order: [["name", "ASC"]],
    });
    const user = req.user;
    res.status(200).send(
      data
    );
     
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
      where: { id, status: "A" },
      order: [["name", "ASC"]],
      include: [
        { model: productCategoryModel, attributes: ["name"] },
        { model: productStorageModel, attributes: ["name"] },
        { model: productTaxModel, attributes: ["name","value"] },
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
        return res.status(404).send({ result: 'Document not found',status: 'error'} );

    res.status(200).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get product details
const getProductBarCode = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await productModel.findOne({
      where: { barcode: id, status: "A" },
      order: [["name", "ASC"]],
      include: [
        { model: productCategoryModel, attributes: ["name"] },
        { model: productStorageModel, attributes: ["name"] },
        { model: productTaxModel, attributes: ["name","value"] },
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
        return res.status(404).send({ result: 'Document not found',status: 'error'} );

    res.status(200).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};


//Insert product
const createProduct = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await productModel.create(body);
    res.status(201).send(data);
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
        return res.status(404).send({ result: 'Document not found',status: 'error'} );
    data.set(body);
    data.save();
    res.status(201).send(data);
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
        return res.status(404).send({ result: 'Document not found',status: 'error'} );
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = {
  getProducts,
  getProduct,
  getProductBarCode,
  createProduct,
  updateProduct,
  deleteProduct,
};
