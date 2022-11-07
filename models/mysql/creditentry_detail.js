const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Creditentry_Detail = sequelize.define(
  "creditsentrys_details",
  {
    idcreditentry: {
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
    price: {
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

module.exports = Creditentry_Detail;

// CREATE TABLE `dbnenyposlite_v_1`.`creditsentrys_details` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `idcreditentry` INT NOT NULL,
//   `idproduct` INT NOT NULL,
//   `product detail` CHAR(50) NOT NULL,
//   `idtax` INT NOT NULL,
//   `quantity` FLOAT NOT NULL,
//   `price` FLOAT NOT NULL,
//   `discount` FLOAT NOT NULL,
// PRIMARY KEY (`id`));
