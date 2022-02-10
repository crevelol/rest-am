const express = require("express");
const bcrypt = require('bcrypt');

const Usuario = require("../models/persona")
const app = express();

app.post("/crear", function(req, res) {
    const body = req.body;
    const user = {
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        avatar: body.avatar
    }

    Usuario.create(user).then(userDB=>{
        res.json({
            ok: true,
            mensaje: userDB
        })
    }).catch(err=>{
        res.json({
            ok: false,
            err
        })
    })
});

app.post("/login", function(req, res) {
    const body = req.body;
    const user = {
        email: body.correo,
        password: body.password
    }

    Usuario.findOne({email: body.correo}, (err, userDB)=>{
        if(err) throw err;

        if( !userDB ){
            return res.json({
                ok: false,
                mensaje: "Usuario o contraseña no coinciden"
            })
        }
        userDB.matchPassword(user.password,userDB.password).then(pa =>{
            if(pa){
                /*const tokenUser = Token.getJwtToken({
                    _id: userDB._id,
                    nombre: userDB.nombre,
                    email: userDB.email,
                    avatar: userDB.avatar
                });*/
                console.log(userDB)
                res.json({
                    ok: true,
                    usuario: userDB,
                    //token: tokenUser
                });
            }else{
                res.json({
                    ok: false,
                    mensaje: "Usuario o contraseña no coinciden"
                })
            }
        })
        
    })
});

app.post("/id/persona", function(req, res) {
    const body = req.body;

    Usuario.find({_id: body.idUsuario}, (err, userDB)=>{
        if(err) throw err;

        if( !userDB ){
            return res.json({
                ok: false,
                mensaje: "Usuario no encontrado"
            })
        }else{
            return res.json({
                ok: true,
                usuario: userDB
            })
        }
    })
    
});

module.exports = app;