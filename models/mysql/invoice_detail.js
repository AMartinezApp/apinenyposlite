const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Invoice_Detail = sequelize.define(
  "invoices_details",
  {
    idinvoice: {
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
    credit_entry: {
      type: DataTypes.ENUM("true","false"),
      defaultValue: "false",
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Invoice_Detail;

// CREATE TABLE `dbnenyposlite_v_1`.`invoices_details` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `idinvoice` INT NOT NULL,
//   `idproduct` INT NOT NULL,
//   `productdetail` CHAR(50) NOT NULL,
//   `idtax` INT NOT NULL,
//   `quantity` FLOAT NOT NULL,
//   `price` FLOAT NOT NULL,
//   `discount` FLOAT NOT NULL,
//   `credit_entry` ENUM('true', 'false') NOT NULL DEFAULT 'false’,
// PRIMARY KEY (`id`));
