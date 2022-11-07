const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
 
const Expense_Detail = sequelize.define(
  "expenses_details",
  {
    idexpense: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    amount:{
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = Expense_Detail;

// CREATE TABLE `dbnenyposlite_v_1`.`expenses_details` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `idexpense` INT NOT NULL,
//   `amount` FLOAT NOT NULL,
//   `details` VARCHAR(500) NOT NULL, 
//  PRIMARY KEY (`id`));