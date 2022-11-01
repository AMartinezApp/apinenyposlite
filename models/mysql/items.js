const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Item = sequelize.define(
    "items",
    {
        barcode:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        name:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        iditemcategory:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
        },
        idtax:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
        },
        cost:{
            type:DataTypes.FLOAT(12,2),
            allowNull:false,
        },
        price:{
            type:DataTypes.FLOAT(12,2),
            allowNull:false,
        },
        iditemstore:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
        },
        iduser:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
        },
        status:{
            type:DataTypes.ENUM('A','D'),
            allowNull:false,
        },

    },
    {
        timestamps: true,
    }
);
module.exports = Item;



// CREATE TABLE `dbnenyposlite_v_1`.`items` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `barcode` CHAR(50) NOT NULL,
//     `name` CHAR(50) NOT NULL,
//     `iditemcategory` INT NOT NULL,
//     `idtax` INT NOT NULL,
//     `cost` FLOAT NOT NULL,
//     `price` FLOAT NOT NULL,
//     `iditemstore` INT NOT NULL,
//     `iduser` INT NOT NULL,
//     `status` ENUM('A', 'D') NOT NULL DEFAULT 'A',
// PRIMARY KEY (`id`));
  