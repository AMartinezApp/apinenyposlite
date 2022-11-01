/** 
 * =================================================================
 * ONTROLLER FILE FOR ITEMS MODEL  
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
const { itemsModel } = require("../models");
//Get the errors helper
const { handleHttpError } = require("../utils/handleError");

// Get List of items 
const getItems = async (req, res) => {
    try {
        const data = await itemsModel.findAll({});
        res.send({data});
    } catch (e) {
        handleHttpError(res,e);
    }
};

//Get item details
const getItem = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await itemsModel.findOne({
            where: {id}
        });
        if(!data)
            return res.status(400).json({message:"document does not exists"})
        res.send({data});
    } catch (e) {
        handleHttpError(res,e);
    } 
};


//Insert item
const create = async (req, res) =>{
    try {
        const body = matchedData(req);
        const data = await itemsModel.create(body);
        res.send({data});
    } catch (e) {
        handleHttpError(res,e);
    }   
};

//Update item
const update = async(req, res) =>{
    try {
         
        const {id} = req.params;
            const body = req.body;
            const data = await itemsModel.findOne({
                where:{ id }
            })
            data.set(body);
            data.save()
            res.send({data});
       
    } catch (e) {
        handleHttpError(res,e);
    }   
};

//Delete item
const deleteItem = async(req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await itemsModel.destroy({
            where:{
                id
            }
        });
        res.send({data});
    } catch (e) {
        handleHttpError(res,e);
    } 
};

module.exports = {getItems,getItem,create,update,deleteItem};