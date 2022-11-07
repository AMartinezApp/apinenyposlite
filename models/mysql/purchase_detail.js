const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Purchase_Detail = sequelize.define(
  "purchases_details",
  {
    idpurchase: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idproduct: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    productdetail: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    idtax: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Purchase_Detail;

// CREATE TABLE `dbnenyposlite_v_1`.`purchases_details` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `idpurchase` INT NOT NULL,
//   `idproduct` INT NOT NULL,
//   `productdetail` CHAR(50) NOT NULL,
//   `idtax` INT NOT NULL,
//   `quantity` FLOAT NOT NULL,
//   `cost` FLOAT NOT NULL,
//   `discount` FLOAT NOT NULL,
// PRIMARY KEY (`id`));
