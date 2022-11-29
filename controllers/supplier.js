/**
 * =================================================================
 * CONTROLLER FILE FOR SUPPLIER MODEL
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
const { supplierModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Supplier
const getSuppliers = async (req, res) => {
  try {
    const data = await supplierModel.findAll({
      where: { status: "A" },
      order: [["name", "ASC"]],
    });
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Supplier details
const getSupplier = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await supplierModel.findOne({
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

//Insert Supplier
const createSupplier = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await supplierModel.create(body);
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Supplier
const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await supplierModel.findOne({
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

//Delete Customer
const deleteSupplier = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await supplierModel.destroy({
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
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
