const FUNC = require("../models/funcionario");
mongoose = require("mongoose");

exports.createFuncio = async (req, res) => {
            try{    
                var { nome, senha, telefone, email, funcao } = req.body;

                if (!nome || !senha || !telefone || !email || !funcao ) {
                    res.status(400).json({ messsage: "preencha todos os campos do formulário."});
                }
                var funcion = await FUNC.FuncioModel.create(req.body)
                    .catch((err) => console.log(err.messsage));
                if (!funcion){
                    return res.status(400).json({ message: "Erro ao cadastrar Funcionário" });
                }
                res.status(201).json({
                    messsage: "Funcionário cadastrado com sucesso",
                    funcionario: {
                        id: funcion._id,
                        nome,
                        telefone,
                        email,
                        funcao
                    },
                });
                } catch (err){
                    res.status(500).json({ message: err.message})
                }
            },
exports.getFuncios = async (req, res) => {
            try{
                var funcion = await FUNC.FuncioModel.find();

                if(funcion.length === 0){
                    return res.status(400)
                    .json({message: "não há Funcionários cadastrados"});
                }

                res.json(funcion);
            } catch (err) {
                res.status(500)
                .json({message: err.message});
            }
        },
exports.funcioGetone = async (req, res) => {
           try{
                const id = req.params.id;
                const funcio = await FUNC.FuncioModel.find({_id: id});
                console.log(funcio);
                res.json(funcio);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.funcioUpdate = async (req, res) => {
            try{
                await FUNC.FuncioModel.findByIdAndUpdate(req.params.id,req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.permissFuncio = async (req, res) => {   
            try {;
                res.status(201).json(await FUNC.FuncioModel.findByIdAndUpdate(req.params.id, { funcao: 'adm' } ));
            } catch (error) {
                res.status(400).json({ message: error.message });
                }
            };
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
exports.validarFuncio = async (req, res, next) => {
                try{
                    const id = req.params.id;
                    const user = await FUNC.FuncioModel.findById(id);        
                    if(!user){
                        return res.status(400).json({ message: "Usuario não encontrado."});
                    }
                    next();
                } catch (err) {
                    res.status(500)
                    .json({message: err.message});
                }
                }