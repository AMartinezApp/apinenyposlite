/** 
 * =================================================================
 * APP Node .js for NenyPos Madera
 * =================================================================
 * @author AMartínezDev, I.E.R.L 
 * @copyright Copyright (c) 2021-2030   
 * @name NenyPos_Madera   
 * @version 1.0
 * @link http://amartinezdev.com/nenypos/api     
 * */


const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO index.js [index,js]
    return fileName.split('.').shift()
};

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file); //TODO index, items, etc
    if (name !== 'index'){
        console.log(`Cargando ruta de: ${name} `);
        router.use(`/${name}`,require(`./${file}`)) //TODO https://localhost:3000/api/items
       
    }
});


module.exports = router;