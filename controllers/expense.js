/**
 * =================================================================
 * CONTROLLER FILE FOR EXPENSE MODEL
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
const { expenseModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of Expense
const getExpenses = async (req, res) => {
  try {
    const data = await expenseModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get Expense details
const getExpense = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await expenseModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert Expense
const createExpense = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await expenseModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update Expense
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await expenseModel.findOne({
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

//Delete Expense
const deleteExpense = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await expenseModel.destroy({
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
  getExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
