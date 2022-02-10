var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

const PUERTO = 3000;

var cors = require('cors');

app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require("./routes/index"));

mongoose.connect('mongodb+srv://cocoa-user:cocoa-user@cluster0.0jiih.mongodb.net/am', (err)=>{
    if(err) throw err;
        console.log('Base de datos ONLINE')
})

app.listen(PUERTO, function(){
	console.log(`Servidor http correindo en el puerto ${PUERTO}`);
});