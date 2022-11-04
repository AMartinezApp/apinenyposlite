
const { sequelize } = require("../../config/mysql");
const { Model, DataTypes } = require("sequelize");

// class Product_Category extends Model{};
// Product_Category.init({
//     name:{
//         type:DataTypes.CHAR(50),
//         allowNull:false,
//         },
//     status:{
//             type:DataTypes.ENUM('A','D'),
//             allowNull:false,
//             defaultValue:'A'
//         },
// },{
//     sequelize,
//     modelName: "products_categorys"
// })

const Product_Category = sequelize.define(
    "products_categorys",
    {
        name:{
            type:DataTypes.CHAR(50),
            allowNull:false,
        },
        status:{
            type:DataTypes.ENUM('A','D'),
            allowNull:false,
            defaultValue:'A'
        },

    },
    {
        timestamps: true,
    }
    
);
 

module.exports = Product_Category;

// CREATE TABLE `dbnenyposlite_v_1`.`products_categorys` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` CHAR(50) NOT NULL,
//     `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));
  