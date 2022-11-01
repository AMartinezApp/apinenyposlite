 
const engine = process.env.ENGINE_DB;

const pathModel = engine === "mysql" ? "./mysql" : "./nosql"

const models = {
    itemsModel: require(`${pathModel}/items`),
    settingModel: require(`${pathModel}/setting`),
    usersModel: require(`${pathModel}/users`),
};


module.exports = models; 