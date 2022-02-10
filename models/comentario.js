const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const comentarioSquema = new Schema({
    comentario: {
        type: String,
        require: [true, "El comentario es requerido"]
    },
    idUsuario: {
        type: String,
        require: [true, "El idUsuario es requerido"]
    },
    idRespuesta: {
        type: String,
        require: [true, "El idRespuesta es requerido"]
    },
    idConsulta: {
        type: String,
        require: [true, "El idConsulta es requerido"]
    }
});

module.exports = model('Comentario', comentarioSquema);