const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
 
const Receipt_Detail = sequelize.define(
  "receipts_details",
  {
    idreceipt: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    idtypedoc: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    typedoc: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Receipt_Detail;

// CREATE TABLE `dbnenyposlite_v_1`.`receipts_details` (
//   `id` INT NOT NULL,
//   `idreceipt` INT NOT NULL,
//   `amount` FLOAT NOT NULL,
//   `idtypedoc ` INT NOT NULL,
//   `typedoc` CHAR(10) NOT NULL,
// PRIMARY KEY (`id`));
