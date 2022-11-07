const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
 
const CreditEntry = sequelize.define(
  "creditsentrys",
  {
    idcustomer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idinvoice: {
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

module.exports = CreditEntry;

// CREATE TABLE `dbnenyposlite_v_1`.`creditsentrys` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `idcustomer` INT NOT NULL,
//   `idinvoice` INT NOT NULL,
//   `idncftype` INT NOT NULL,
//   `ncf` CHAR(50) NOT NULL,
//   `iduser` INT NOT NULL,
//   `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));