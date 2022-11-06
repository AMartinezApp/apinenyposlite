const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const UserRole = sequelize.define(
  "users_roles",
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
module.exports = UserRole;

// CREATE TABLE `dbnenyposlite_v_1`.`users_roles` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` CHAR(50) NOT NULL,
//     `status` ENUM('A', 'D') NOT NULL DEFAULT 'A' COMMENT 'A=active, D=deleted',
// PRIMARY KEY (`id`));
