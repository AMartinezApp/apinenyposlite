const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Setting =  sequelize.define(
    "settings",
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
        address:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        city:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        identity:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        logo:{
            type:DataTypes.BLOB,
            allowNull:false,
        },
        note_sales:{
            type:DataTypes.STRING(500),
            allowNull:false,
        },
        note_receipts:{
            type:DataTypes.STRING(500),
            allowNull:false,
        },
        footer:{
            type:DataTypes.STRING(500),
            allowNull:false,
        },

    },
    {
        timestamps: true,
    }
);
module.exports = Setting;

// CREATE TABLE `dbnenyposlite_v_1`.`settings` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` CHAR(50) NOT NULL,
//     `phone` CHAR(50) NOT NULL,
//     `address` CHAR(50) NOT NULL,
//     `city` CHAR(50) NOT NULL,
//     `identity` CHAR(50) NOT NULL,
//     `logo` BLOB NOT NULL,
//     `note_sales` VARCHAR(500) NOT NULL,
//     `note_receipts` VARCHAR(500) NOT NULL,
//     `footer` VARCHAR(500) NOT NULL,
// PRIMARY KEY (`id`));
  