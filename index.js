const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const mysql=require('mysql');

const corsMiddle =require("./models/corsmodule");

require('dotenv/config');

const app = express();
app.use(corsMiddle);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
           
app.set("trust proxy", 1);




app.use('/', routesHandler);

app.get("/",(req,res)=>{

    res.send("This is a privatly owned application")
})

// Mysql Connection
const pool=mysql.createPool({
    connectionLimit:10,
    host:"184.168.114.28",
    user:"postman",
    password:"MmHmE]beZg1=",
    database:"blogbase",
})





app.get('/allrows', function(req, res){
    pool.getConnection((err,connection)=>{
        if (err){
            res.send("no whay");
        }else{

            connection.query('SELECT * from blogdetails',(err,rows)=>{
                connection.release();
                if (!err){
                    res.send(rows);

                }else{
                    console.log(err);
                }
            })
        }
    })
});













const PORT = process.env.PORT || 5000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
