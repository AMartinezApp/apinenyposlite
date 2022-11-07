const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Purchase = sequelize.define(
  "purchases",
  {
    details: {
      type: DataTypes.STRING(500),
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

module.exports = Purchase;

// CREATE TABLE `dbnenyposlite_v_1`.`purchases` (
//   `id` INT NOT NULL AUTO_INCREMENT,ß
//   `details` VARCHAR(500) NOT NULL,
//   `iduser` INT NOT NULL,
//   `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active D=deleted',
// PRIMARY KEY (`id`));
