const { Sequelize } = require("sequelize");
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD; 
const host = process.env.MYSQL_HOST; 
//const relations = require("../models/relations")
 

const sequelize =  new Sequelize(
    database,
    username,
    password,
    {
        host:host, 
        dialect:"mysql" 

    }
); 

const connectMysql = async() =>{
try {
    await sequelize.authenticate();
   
    await sequelize.sync({force: false});  
    console.log('**** CONEXION CORRECTA EN MYSQL');
} catch (e) {
    console.log('**** ERROR DE CONEXION EN MYSQL',e); 
}
};

module.exports = { sequelize, connectMysql} ; 