const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "products",
  {
    barcode: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    idcategory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idtax: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT(12, 2),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(12, 2),
      allowNull: false,
    },
    idstore: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("A", "D"),
      allowNull: false,
      defaultValue: "A",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product;

// CREATE TABLE `dbnenyposlite_v_1`.`products` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `barcode` CHAR(50) NOT NULL,
//     `name` CHAR(50) NOT NULL,
//     `idcategory` INT NOT NULL,
//     `idtax` INT NOT NULL,
//     `cost` FLOAT NOT NULL,
//     `price` FLOAT NOT NULL,
//     `idstore` INT NOT NULL,
//     `iduser` INT NOT NULL,
//     `status` ENUM('A', 'D') NOT NULL DEFAULT 'A',
// PRIMARY KEY (`id`));
