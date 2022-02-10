const express = require("express");

const Consulta = require("../models/consulta")
const app = express();

app.post("/crear/consulta", function(req, res) {
    const body = req.body;

    const consult = {
        titulo: body.titulo,
        consulta: body.consulta,
        cerrado: body.cerrado,
        idUsuario: body.idUsuario
    }

    Consulta.create(consult).then(consultDB=>{
        res.json({
            ok: true,
            consulta: consultDB
        })
    }).catch(err=>{
        res.json({
            ok: false,
            err
        })
    })
});

app.post("/mis/consulta", function(req, res) {
    const body = req.body;

    Consulta.find({idUsuario: body.idUsuario}, (err, consultDB)=>{
        if(err) throw err;

        if( !consultDB ){
            return res.json({
                ok: false,
                mensaje: "No tiene consultas"
            })
        }else{
            return res.json({
                ok: true,
                consultas: consultDB
            });
        }
    })
});

app.get("/consulta", function(req, res) {
    Consulta.find({}, (err, consultDB)=>{
        if(err) throw err;

        if( !consultDB ){
            return res.json({
                ok: false,
                mensaje: "No tiene consultas"
            })
        }else{
            return res.json({
                ok: true,
                consultas: consultDB
            });
        }
    })
});

app.post("/id/consulta", function(req, res) {
    const body = req.body;

    Consulta.findById(body.idConsulta, (err, consultDB)=>{
        if(err) throw err;

        if( !consultDB ){
            return res.json({
                ok: false,
                mensaje: "No existe consulta"
            })
        }else{
            return res.json({
                ok: true,
                consulta: consultDB
            });
        }
    })
});

app.post("/cerrado/consulta", function(req, res) {
    const body = req.body;

    Consulta.updateOne({_id: body.idConsulta},{cerrado: true}, (err, consultDB)=>{
        if(err) throw err;

        if( !consultDB ){
            return res.json({
                ok: false,
                mensaje: "No existe consulta"
            })
        }else{
            return res.json({
                ok: true,
                consulta: consultDB
            });
        }
    })
});


module.exports = app;