const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
 
const Receipt = sequelize.define(
  "receipts",
  {
    idcustomer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idpaymenttype: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    paymentdetails: {
      type: DataTypes.CHAR(50),
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

module.exports = Receipt;

// CREATE TABLE `dbnenyposlite_v_1`.`receipts` (
//   `id` INT NOT NULL AUTO_INCREMENT, 
//   `idcustomer` INT NOT NULL,
//   `idpaymenttype` INT NOT NULL,
//   `paymentdetails` VARCHAR(500) NOT NULL,
//   `iduser` INT NOT NULL,
//   `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));