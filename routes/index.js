const express = require("express");

const path = require('path');

const app = express();

app.use(require("./persona"));
app.use(require("./consulta"));
app.use(require("./respuesta"));
app.use(require("./comentario"))
//app.use(express.static(path.join(__dirname,'../public')))

module.exports = app;