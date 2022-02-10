const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const consultaSquema = new Schema({
    titulo: {
        type: String,
        require: [true, "El usuario es requerido"]
    },
    consulta: {
        type: String,
        require: [true, "El email es requerido"]
    },
    cerrado: {
        type: Boolean,
        require: [true, "Se necesita que tenga este valor de cerrado"]
    },
    idUsuario: {
        type: String,
        require: [true, "El id es necesario"]
    }
});

module.exports = model('Consulta', consultaSquema);