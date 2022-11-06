const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Product_Storage = sequelize.define(
  "products_stores",
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

module.exports = Product_Storage;

// CREATE TABLE `dbnenyposlite_v_1`.`products_stores` (
//    `id` INT NOT NULL AUTO_INCREMENT,
//    `name` CHAR(50) NOT NULL,
//    `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));
