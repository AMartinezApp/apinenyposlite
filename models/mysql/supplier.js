const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
 
const Supplier = sequelize.define(
  "suppliers",
  {
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    phone: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    email: {
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

module.exports = Supplier;

// CREATE TABLE `dbnenyposlite_v_1`.`suppliers` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `name` CHAR(50) NOT NULL,
//   `phone` CHAR(50) NOT NULL,
//   `email` CHAR(50) NOT NULL,
//   `iduser` INT NOT NULL,
//   `status` ENUM('A', 'D') NOT NULL DEFAULT 'A', 
// PRIMARY KEY (`id`));