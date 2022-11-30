/**
 * =================================================================
 * CONTROLLER FILE FOR NCF TYPE MODEL
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
const { ncfTypeModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of NcfType
const getNcfTypes = async (req, res) => {
  try {
    const data = await ncfTypeModel.findAll({
      where: { status: "A" },
      order: [["name", "ASC"]],
    });
    res.send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get NcfType details
const getNcfType = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await ncfTypeModel.findOne({
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

//Insert NcfType
const createNcfType = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await ncfTypeModel.create(body);
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update NcfType
const updateNcfType = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await ncfTypeModel.findOne({
      where: { id, status: "A" },
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

//Delete NcfType
const deleteNcfType = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await ncfTypeModel.destroy({
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
  getNcfTypes,
  getNcfType,
  createNcfType,
  updateNcfType,
  deleteNcfType,
};
