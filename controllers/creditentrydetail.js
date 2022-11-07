/**
 * =================================================================
 * CONTROLLER FILE FOR CREDIT ENTRY DETAIL MODEL
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
const { creditentryDetailModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of CreditEntryDetail
const getCreditEntryDetails = async (req, res) => {
  try {
    const data = await creditentryDetailModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get CreditEntryDetail details
const getCreditEntryDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await creditentryDetailModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert CreditEntryDetail
const createCreditEntryDetail = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await creditentryDetailModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update CreditEntryDetail
const updateCreditEntryDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await creditentryDetailModel.findOne({
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

//Delete CreditEntryDetail
const deleteCreditEntryDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await creditentryDetailModel.destroy({
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
  getCreditEntryDetails,
  getCreditEntryDetail,
  createCreditEntryDetail,
  updateCreditEntryDetail,
  deleteCreditEntryDetail,
};
