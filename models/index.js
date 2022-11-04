 
const models = {
    productCategoryModel: require('./mysql/product_category'),
    productStorageModel: require('./mysql/product_storage'),
    productTaxModel: require('./mysql/product_tax'),
    productModel: require('./mysql/product'),
    settingModel: require('./mysql/setting'),
    userRoleModel: require('./mysql/user_role'),
    userModel: require('./mysql/user'),
    
};
 
//One to many relationship
//One category has many products 
models.productCategoryModel.hasMany(
    models.productModel,{ foreignKey: "idcategory" }
);

models.productModel.belongsTo(
    models.productCategoryModel, { foreignKey: 'idcategory' }
)

//One to many relationship
//One store has many products 
models.productStorageModel.hasMany(
    models.productModel,{ foreignKey: "idstore" }
);

models.productModel.belongsTo(
    models.productStorageModel, { foreignKey: 'idstore' }
)

//One to many relationship
//One Tax has many products 
models.productTaxModel.hasMany(
    models.productModel,{ foreignKey: "idtax" }
);

models.productModel.belongsTo(
    models.productTaxModel, { foreignKey: 'idtax' }
)
 
module.exports = models; 