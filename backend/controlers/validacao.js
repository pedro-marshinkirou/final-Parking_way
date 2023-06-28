const CLT = require("../models/cliente");
const FUNC = require("../models/funcionario");
mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
var secret_key = "0faf19e9da51773355e530427ea5cb44"

exports.login = async (req, res) => {
    try {
        var { email, senha } = req.body;
        var user = await CLT.ClienteModel.findOne({email: email}).select("+senha") || await FUNC.FuncioModel.findOne({email: email}).select("+senha");
        if(!user){
            return res.status(404).json({message: "Senha ou usuário invalidos"})
        }
        var passvalid = await bcrypt.compare(senha, user.senha)
        if(!passvalid){
            return res.status(400).json({message: "Senha ou usuário inválidos"})
        }
        var token = jwt.sign({id: user.id, email: user.email}, secret_key, {expiresIn: '2h'});
        console.log(token);
        jwt.verify(token, secret_key, async (error, decoded) => {
            if (error){
                res.status(401).json({message: "token expirado"});
            }
        var user = await CLT.ClienteModel.findById(decoded.id) || await FUNC.FuncioModel.findById(decoded.id);
        if (!user || !user.email) {
            res.status(401).json({message: "token invalido"});
        }
            req.userid = user._id;
            res.status(201).json({user});
            return user;
        }) 
        } catch (err) {
            res.status(500).json(err.message);
        }
}                