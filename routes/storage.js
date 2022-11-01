
//Route file for storage files on server
const  uploadMiddleware  = require("../utils/handleStorage");
const express = require('express');
const router = express.Router();
 
router.post("/",uploadMiddleware.single("myfile"), (req, res)=>{
    res.send({a:1})
})

module.exports = router;