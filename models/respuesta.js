const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const respuestaSquema = new Schema({
    titulo: {
        type: String,
        require: [true, "El comentario es requerido"]
    },
    respuesta: {
        type: String,
        require: [true, "El comentario es requerido"]
    },
    idUsuario: {
        type: String,
        require: [true, "El idUsuario es requerido"]
    },
    idConsulta: {
        type: String,
        require: [true, "El idConsulta es requerido"]
    },
    solucion: {
        type: Boolean,
        required: [true, "Es requerida la solucion"]
    }
});

module.exports = model('Respuesta', respuestaSquema);