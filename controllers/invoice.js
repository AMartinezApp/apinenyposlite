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
const { invoiceModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of invoice
const getInvoices = async (req, res) => {
  try {
    const data = await invoiceModel.findAll();
    res.send({ data });
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
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert invoice
const createInvoice = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await invoiceModel.create(body);
    res.send({ data });
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
      return res.status(404).json({ message: "document does not exists" });

    data.set(body);
    data.save();
    res.send({ data });
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
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
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
