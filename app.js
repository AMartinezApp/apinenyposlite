require("dotenv").config()

const express = require('express');
const cors = require('cors'); 
const { connectMysql } = require('./config/mysql');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Require the routes
app.use("/api",require("./routes"));

app.listen(port, () =>{
    console.log('Server listening on port', port);
})

 
connectMysql();
 
