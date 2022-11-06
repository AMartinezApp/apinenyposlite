const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
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
    password: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    idrole: {
      type: DataTypes.INTEGER,
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

module.exports = User;

// CREATE TABLE `dbnenyposlite_v_1`.`users` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `createdate` DATETIME NOT NULL,
//     `name` CHAR(50) NOT NULL,
//     `phone` CHAR(50) NOT NULL,
//     `email` CHAR(50) NOT NULL,
//     `password` VARCHAR(500) NOT NULL,
//     `idrole` INT NOT NULL,
//     `createdby` INT NOT NULL,
//     `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));
