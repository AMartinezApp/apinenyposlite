const models = {
  productCategoryModel: require("./mysql/product_category"),
  productStorageModel: require("./mysql/product_store"),
  productTaxModel: require("./mysql/product_tax"),
  productModel: require("./mysql/product"),
  settingModel: require("./mysql/setting"),
  userRoleModel: require("./mysql/user_role"),
  userModel: require("./mysql/user"),
  // stokeModel: require("./mysql/stock"), this entity will be managed for triggers in database
  purchaseModel: require("./mysql/purchase"),
  purchaseDetailModel: require("./mysql/purchase_detail"),
  invoiceModel: require("./mysql/invoice"),
  invoiceDetailModel: require("./mysql/invoice_detail"),
  customerModel: require("./mysql/customer"),
  ncfTypeModel: require("./mysql/ncf_type"),
  receiptModel: require("./mysql/receipt"),
  receiptDetailModel: require("./mysql/receipt_detail"),
  paymentTypeModel: require("./mysql/payment_type"),
  creditentryModel: require("./mysql/creditentry"),
  creditentryDetailModel: require("./mysql/creditentry_detail"),
  expenseModel: require("./mysql/expense"),
  expenseTypeModel: require("./mysql/expense_type"),
  expenseDetailModel: require("./mysql/expense_detail"),
  supplierModel: require("./mysql/supplier"),
  revenueModel: require("./mysql/revenue"),
};

//One to many relationship
//One category has many products
models.productCategoryModel.hasMany(models.productModel, {foreignKey: "idcategory"});

models.productModel.belongsTo(models.productCategoryModel, {foreignKey: "idcategory"});

//One to many relationship
//One store has many products
models.productStorageModel.hasMany(models.productModel, {foreignKey: "idstore"});

models.productModel.belongsTo(models.productStorageModel, {foreignKey: "idstore"});

//One to many relationship
//One Tax has many products
models.productTaxModel.hasMany(models.productModel, { foreignKey: "idtax" });

models.productModel.belongsTo(models.productTaxModel, { foreignKey: "idtax" });

//One to many relationship
//One rol has many users
models.userRoleModel.hasMany(models.userModel, {foreignKey: "idrole"});
models.userModel.belongsTo(models.userRoleModel, {foreignKey: "idrole"});

module.exports = models;