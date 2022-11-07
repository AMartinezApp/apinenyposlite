/**
 * =================================================================
 * CONTROLLER FILE FOR EXPENSE DETAIL MODEL
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
const { expenseDetailModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of ExpenseDetail
const getExpenseDetails = async (req, res) => {
  try {
    const data = await expenseDetailModel.findAll();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get ExpenseDetail details
const getExpenseDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await expenseDetailModel.findOne({
      where: { id },
    });
    if (!data)
      return res.status(404).json({ message: "document does not exists" });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert ExpenseDetail
const createExpenseDetail = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await expenseDetailModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update ExpenseDetail
const updateExpenseDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await expenseDetailModel.findOne({
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

//Delete ExpenseDetail
const deleteExpenseDetail = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await expenseDetailModel.destroy({
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
  getExpenseDetails,
  getExpenseDetail,
  createExpenseDetail,
  updateExpenseDetail,
  deleteExpenseDetail,
};
