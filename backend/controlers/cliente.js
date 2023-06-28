const CLT = require("../models/cliente");
mongoose = require("mongoose");
validuser = require("../controlers/validacao");

exports.createCliente = async (req, res) => {
    console.log(req)
            try{    
                var { nome, senha, telefone, email, modelo, placa } = req.body;

                if (!nome || !senha || !telefone || !email || !modelo || !placa ) {
                    res.status(400).json({ messsage: "preencha todos os campos do formulário."});
                }

                var cliente = await CLT.ClienteModel.create(req.body)
                    .catch((err) => console.log(err.messsage));
                if (!cliente){
                    return res.status(400).json({ message: "Erro ao criar Usuário" });
                }

                res.status(201).json({
                    messsage: "usuario cadastrado com sucesso",
                    cliente: {
                        id: cliente._id,
                        nome,
                        telefone,
                        email,
                        modelo,
                        placa,
                    },
                });
            } catch (err){
                res.status(500).json({ message: err.message})
            }
        }
        
exports.getClientes = async (req, res) => {
            try{
                var clientes = await CLT.ClienteModel.find();

                if(clientes.length === 0){
                    return res.status(400)
                    .json({message: "não há clientes cadastrados"});
                }

                res.json(clientes);
            } catch (err) {
                res.status(500)
                .json({message: err.message});
            }
        },
exports.clienteGetone = async (req, res) => {
           try{
                const id = req.params.id;
                const cliente = await CLT.ClienteModel.find({_id: id});
                console.log(cliente);
                res.json(cliente);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.clienteUpdate = async (req, res) => {
            try{
                await CLT.ClienteModel.findByIdAndUpdate(req.params.id,req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.validarId = (req, res, next) => {
                try{
                    const id = req.params.id;        
                    if(!mongoose.Types.ObjectId.isValid(id)){
                        return res.status(400).json({message: "ID Invalido"});
                    }
                    next();
                }catch (err) {
                    res.status(500)
                    .json({message: err.message});
                }
                },
exports.validarCliente = async (req, res, next) => {
                try{
                    const id = req.params.id;
                    const user = await CLT.ClienteModel.findById(id);        
                    if(!user){
                        return res.status(400).json({ message: "Usuario não encontrado."});
                    }
                    next();
                } catch (err) {
                    res.status(500)
                    .json({message: err.message});
                }
                }