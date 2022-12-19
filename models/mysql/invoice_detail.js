const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Invoice_Detail = sequelize.define(
  "invoices_details",
  {
    idinvoice: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idproduct: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    productdetail: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    price_unit: {
        type: DataTypes.FLOAT(12,2),
        allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT(12,2),
      defaultValue: 0,
      allowNull: true,
    },
    tax: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT(12,2),
      allowNull: false,
    },
    credit_entry: {
      type: DataTypes.FLOAT(12,2),
      defaultValue: 0,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Invoice_Detail;

 
