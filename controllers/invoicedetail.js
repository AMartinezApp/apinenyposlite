/**
 * =================================================================
 * CONTROLLER FILE FOR INVOICE DETAIL MODEL
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
const { invoiceDetailModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of invoice
const getInvoiceDetails = async (req, res) => {
  try {
    const data = await invoiceDetailModel.findAll({
      order: [["productdetail", "ASC"]],
    });
    res.status(200).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get invoice details
const getInvoiceDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await invoiceDetailModel.findOne({
      where: { id },
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
const createInvoiceDetail = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await invoiceDetailModel.create(body);
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update invoice
const updateInvoiceDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await invoiceDetailModel.findOne({
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
const deleteInvoiceDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await invoiceDetailModel.destroy({
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
  getInvoiceDetails,
  getInvoiceDetail,
  createInvoiceDetail,
  updateInvoiceDetail,
  deleteInvoiceDetail,
};
