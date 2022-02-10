require("./config/config");

var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

var cors = require('cors');

app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require("./routes/index"));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

mongoose.connect('mongodb+srv://cocoa-user:cocoa-user@cluster0.0jiih.mongodb.net/am', (err)=>{
    if(err) throw err;
        console.log('Base de datos ONLINE')
})

app.listen(process.env.PORT, function(){
	console.log(`Servidor http correindo en el puerto ${process.env.PORT}`);
});