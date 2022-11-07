/**
 * =================================================================
 * CONTROLLER FILE FOR EXPENCE TYPE MODEL
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
const { expenseTypeModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Expense type
const getExpenseTypes = async (req, res) => {
  try {
    const data = await expenseTypeModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Expense type details
const getExpenseType = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await expenseTypeModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert Expense type
const createExpenseType = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await expenseTypeModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Expense type
const updateExpenseType = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await expenseTypeModel.findOne({
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

//Delete Expense type
const deleteExpenseType = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await expenseTypeModel.destroy({
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
  getExpenseTypes,
  getExpenseType,
  createExpenseType,
  updateExpenseType,
  deleteExpenseType,
};