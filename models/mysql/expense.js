const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
 
const Expense = sequelize.define(
  "expenses",
  {
    details: {
      type: DataTypes.STRING(500),
      allowNull: false, 
    },
    idsupplier: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    amount:{
      type: DataTypes.FLOAT(12,2),
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
    idexpense_type: {
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

module.exports = Expense;

// CREATE TABLE `dbnenyposlite_v_1`.`expenses` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `details` VARCHAR(500) NOT NULL
//   `idsupplier` INT NOT NULL,
//   `amount` FLOAT NOT NULL,
//   `idncftype` INT NOT NULL,
//   `ncf` CHAR(50) NOT NULL,
//   `idexpense_type` INT NOT NULL,
//   `iduser` INT NOT NULL,
//   `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));