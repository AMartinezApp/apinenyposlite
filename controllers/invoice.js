/**
 * =================================================================
 * CONTROLLER FILE FOR INVOICE MODEL
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
const { invoiceModel, invoiceDetailModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of invoice
const getInvoices = async (req, res) => {
  try {
    const data = await invoiceModel.findAll({
      include: [
        { model: invoiceDetailModel, attributes: ["id","idinvoice","idproduct","productdetail","quantity","price", "tax", "discount","credit_entry"]},
      ],
      where: { status: "A" },
      order: [["createdAt", "ASC"]],
    });
    res.status(200).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get invoice details
const getInvoice = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await invoiceModel.findOne({
      where: { id, status: "A" },
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

//Insert invoice
const createInvoice = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await invoiceModel.create(body);
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update invoice
const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await invoiceModel.findOne({
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

//Delete invoice
const deleteInvoice = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await invoiceModel.destroy({
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
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
