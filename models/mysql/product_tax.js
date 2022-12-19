const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Product_Tax = sequelize.define(
  "products_taxes",
  {
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT(12, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("A", "D"),
      allowNull: true,
      defaultValue: "A",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product_Tax;

// CREATE TABLE `dbnenyposlite_v_1`.`Product_Tax` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` CHAR(50) NOT NULL,
//     `value` FLOAT(12,2) NOT NULL,
//     `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));
