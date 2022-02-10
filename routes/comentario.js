const express = require("express");

const Comentario = require("../models/comentario")
const app = express();

app.post("/crear/comentario", function(req, res) {
    const body = req.body;

    const coment = {
        comentario: body.comentario,
        idUsuario: body.idUsuario,
        idRespuesta: body.idRespuesta,
        idConsulta: body.idConsulta
    }

    Comentario.create(coment).then(comentDB=>{
        res.json({
            ok: true,
            comentario: comentDB
        })
    }).catch(err=>{
        res.json({
            ok: false,
            err
        })
    })
});

app.post("/comentario", function(req, res) {
    const body = req.body;

    Comentario.find({idConsulta: body.idConsulta}, (err, comentDB)=>{
        if(err) throw err;

        if( !comentDB ){
            return res.json({
                ok: false,
                mensaje: "No tiene comentarios"
            })
        }else{
            return res.json({
                ok: true,
                comentarios: comentDB
            });
        }
    })
});

module.exports = app;