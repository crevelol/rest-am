const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt')

const personSquema = new Schema({
    nombre: {
        type: String,
        require: [true, "El usuario es requerido"]
    },
    avatar: {
        type: String,
        dafault: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        require: [true, "El email es requerido"]
    },
    password: {
        type: String,
        require: [true, "La contraseña es requerida"]
    },
});

personSquema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

personSquema.methods.matchPassword = async (password, verificar) => {
    return await bcrypt.compare(password, verificar);
}

module.exports = model('Persona', personSquema);