
const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Ncf_type = sequelize.define(
  "ncf_types",
  {
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    typedoc: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    typedoc: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    prefix: {
      type: DataTypes.CHAR(5),
      allowNull: false,
    },
    inicial_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    final_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    current_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    expiration:{
      type: DataTypes.DATE(),
      allowNull:false
    },
    status: {
      type: DataTypes.ENUM("A", "D"),
      allowNull: false,
      defaultValue: "A",
    },
    tax: {
      type: DataTypes.ENUM("true", "false"),
      allowNull: false,
      defaultValue: "false",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Ncf_type;

// CREATE TABLE `dbnenyposlite_v_1`.`ncftypes` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `name` CHAR(50) NOT NULL,
//   `typedoc` CHAR(50) NOT NULL,
//   `prefix` CHAR(5) NOT NULL,
//   `inicial_num` INT NOT NULL,
//   `final_num` INT NOT NULL,
//   `current_num` INT NOT NULL,
//   `expiration` DATETIME NOT NULL, 

// PRIMARY KEY (`id`));