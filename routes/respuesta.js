const express = require("express");

const Respuesta = require("../models/respuesta")
const app = express();

app.post("/crear/respuesta", function(req, res) {
    const body = req.body;

    const respue = {
        titulo: body.titulo,
        respuesta: body.respuesta,
        idUsuario: body.idUsuario,
        idConsulta: body.idConsulta,
        solucion: false
    }

    Respuesta.create(respue).then(respueDB=>{
        res.json({
            ok: true,
            respuesta: respueDB
        })
    }).catch(err=>{
        res.json({
            ok: false,
            err
        })
    })
});

app.post("/respuesta", function(req, res) {
    const body = req.body;

    Respuesta.find({idConsulta: body.idConsulta}, (err, respueDB)=>{
        if(err) throw err;

        if( !respueDB ){
            return res.json({
                ok: false,
                mensaje: "No tiene respuestas"
            })
        }else{
            return res.json({
                ok: true,
                respuestas: respueDB
            });
        }
    })
});

app.post("/cerrado/respuesta", function(req, res) {
    const body = req.body;

    Respuesta.updateOne({_id: body.idRespuesta},{solucion: true}, (err, respueDB)=>{
        if(err) throw err;

        if( !respueDB ){
            return res.json({
                ok: false,
                mensaje: "No existe consulta"
            })
        }else{
            return res.json({
                ok: true,
                consulta: respueDB
            });
        }
    })
});

module.exports = app;