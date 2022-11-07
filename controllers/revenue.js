/**
 * =================================================================
 * CONTROLLER FILE FOR REVENUEV MODEL
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
const { revenueModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Revenue
const getRevenues = async (req, res) => {
  try {
    const data = await revenueModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Revenue details
const getRevenue = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await revenueModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert Revenue
const createRevenue = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await revenueModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Revenue
const updateRevenue = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await revenueModel.findOne({
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

//Delete Customer
const deleteRevenue = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await revenueModel.destroy({
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
  getRevenues,
  getRevenue,
  createRevenue,
  updateRevenue,
  deleteRevenue,
};
