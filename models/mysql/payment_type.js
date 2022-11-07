const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Payment_Type = sequelize.define(
  "payments_types",
  {
    name: {
      type: DataTypes.CHAR(50),
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

module.exports = Payment_Type;

// CREATE TABLE `dbnenyposlite_v_1`.`payments_types` (
//    `id` INT NOT NULL AUTO_INCREMENT,
//    `name` CHAR(50) NOT NULL,
//    `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));