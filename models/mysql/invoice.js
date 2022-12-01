const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
 
const Invoice = sequelize.define(
  "invoices",
  {
    condition: {
      type: DataTypes.ENUM("cash", "credit"),
      allowNull: false,
      defaultValue: "cash",
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idcustomer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idncftype: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    ncf: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    footer: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("A", "D"),
      allowNull: false,
      defaultValue: "A",
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

module.exports = Invoice;

// CREATE TABLE `dbnenyposlite_v_1`.`invoices` (
//   `id` INT NOT NULL AUTO_INCREMENT, 
//   `condition` ENUM('cash', 'credit') NOT NULL DEFAULT 'cash',
//   `expiration` DATETIME NOT NULL,
//   `idcustomer` INT NOT NULL,
//   `idncftype` INT NOT NULL,
//   `ncf` CHAR(50) NOT NULL,
//   `iduser` INT NOT NULL,
//   `footer` VARCHAR(500) NOT NULL,
//   `status` ENUM('A', 'D') NOT NULL DEFAULT 'A'  COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));