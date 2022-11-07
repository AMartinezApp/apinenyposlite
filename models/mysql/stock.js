const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

//This entity will be managed for triggers in database
const Stock = sequelize.define(
  "stocks",
  {
    idproduct: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idproductstore: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    quantity_in: {
      type: DataTypes.FLOAT(12, 2),
      allowNull: false,
    },
    quantity_out: {
      type: DataTypes.FLOAT(12, 2),
      allowNull: false,
    },
    quantity_stok: {
      type: DataTypes.FLOAT(12, 2),
      allowNull: false,
    },
    doctype: {
      type: DataTypes.ENUM('S', 'P', 'NS', 'NP', 'NC'),
      allowNull: false,
    },
    iddoctype: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
     
  },
  {
    timestamps: true,
  }
);

module.exports = Stock;

// CREATE TABLE `dbnenyposlite_v_1`.`stocks` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `idproduct` INT NOT NULL,
//   `idproductstore` INT NOT NULL,
//   `quantity_in` FLOAT NOT NULL,
//   `quantity_out` FLOAT NOT NULL,
//   `quantity_stok` FLOAT NOT NULL,
//   `doctype` ENUM('S', 'P', 'NS', 'NP', 'NC') NOT NULL COMMENT 'S=sales, P=purchase, NS=null sale, NP=null purcharse,NC=credits entrys',
//   `iddoctype` INT NOT NULL,
//   `iduser` INT NOT NULL, 
// PRIMARY KEY (`id`));