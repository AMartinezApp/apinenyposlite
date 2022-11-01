const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const User =  sequelize.define(
    "users",
    {
        name:{
            type:DataTypes.CHAR(50), 
            allowNull:false,
        },
        phone:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        email:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        password:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        role:{
            type:DataTypes.ENUM(["user","admin"]), 
        }

    },
    {
        timestamps: true,
    }
);
module.exports = User;