const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Setting =  sequelize.define(
    "Setting",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    },
    {
        timestamps: true,
    }
);
module.exports = Setting;