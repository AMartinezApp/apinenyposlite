/**
 * =================================================================
 * CONTROLLER FILE FOR SETTING MODEL
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
const { settingModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of ßsetting
const getSettings = async (req, res) => {
  try {
    const data = await settingModel.findAll();
    res.status(200).send(
      data
    );
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Get setting details
const getSetting = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await settingModel.findOne({
      where: { id },
    });
    if (!data)
        return res.status(404).send({ result: 'Document not found',status: 'error'} );
    res.send( data );
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Insert setting
const createSetting = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await settingModel.create(body);
    res.status(201).send(
      data
    );
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Update setting
const updateSetting = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await settingModel.findOne({
      where: { id },
    });
    if (!data)
        return res.status(404).send({ result: 'Document not found',status: 'error'} );

    data.set(body);
    data.save();
    res.status(201).send(
      data
    );
  } catch (e) {
    handleHttpError(res, e);
  }
};

//Delete setting
const deleteSetting = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await settingModel.destroy({
      where: {
        id,
      },
    });
    if (!data)
        return res.status(404).send({ result: 'Document not found',status: 'error'} );
    res.status(201).send(data);
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = {
  getSettings,
  getSetting,
  createSetting,
  updateSetting,
  deleteSetting,
};
