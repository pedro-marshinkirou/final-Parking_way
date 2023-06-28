const EST = require("../models/estacionamento");
mongoose = require("mongoose");

exports.createEstacionamento = async (req, res) => {
            try{    
                var { nome, 
                    descricao, 
                    quantidade_vagas, 
                    telefone, 
                    endereco, 
                    cep, 
                    valor_multa, 
                    valor_vaga, 
                    valor_hora_extra, 
                    taxa_cancelamento, 
                    cnpj, 
                    nome_proprietario, 
                    funcionario, 
                    valor_espera, 
                    limite_horas } = req.body;

                if (!nome || 
                    !descricao || 
                    !quantidade_vagas || 
                    !endereco || 
                    !cep || 
                    !valor_multa || 
                    !valor_vaga|| 
                    !valor_hora_extra||
                    !taxa_cancelamento|| 
                    !cnpj|| 
                    !nome_proprietario|| 
                    !funcionario || 
                    !valor_espera || 
                    !limite_horas ) {
                    res.status(400).json({ messsage: "preencha todos os campos do formulário."});
                }

                var estacionamento = await EST.EstacionamentoModel.create(req.body)
                    .catch((err) => console.log(err.messsage));
                if (!estacionamento){
                    return res.status(400).json({ message: "Erro ao criar Estacionamento" });
                }

                res.status(201).json({
                    messsage: "Estacionamento cadastrado com sucesso",
                    estacionamento: {
                        id: estacionamento._id,
                        nome,
                        descricao,
                        quantidade_vagas, 
                        telefone, 
                        endereco, 
                        cep, 
                        valor_multa, 
                        valor_vaga, 
                        valor_hora_extra, 
                        taxa_cancelamento, 
                        cnpj, 
                        nome_proprietario, 
                        funcionario, 
                        valor_espera, 
                        limite_horas,
                    },
                });
            } catch (err){
                res.status(500).json({ message: err.message})
            }
        }
        
exports.getEstacionamentos = async (req, res) => {
            try{
                var estacionamentos = await EST.EstacionamentoModel.find();

                if(estacionamentos.length === 0){
                    return res.status(400)
                    .json({message: "não há estacionamentos cadastrados"});
                }

                res.json(estacionamentos);
            } catch (err) {
                res.status(500)
                .send({message: err.message});
            }
        },
exports.EstacionamentoGetone = async (req, res) => {
           try{
                const id = req.params.id;
                const estacionamento = await EST.EstacionamentoModel.findById(id);
                console.log(estacionamento);
                res.json(estacionamento);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.EstacionamentoUpdate = async (req, res) => {
            try{
                id = req.params.id;
                await EST.EstacionamentoModel.findOneAndUpdate({funcionario: id},req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.EstacionamentoGetoneBYUser = async (req, res) => {
           try{
                const id = req.params.id;
                const estacionamento = await EST.EstacionamentoModel.find({funcionario: id});
                console.log(estacionamento);
                res.json(estacionamento);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.procurarEstac = async (req, res) => {
                try{
                    console.log(req)
                    var {estacionamento} = req.body;
                    console.log( estacionamento);
                    console.log( typeof estacionamento);
                    var estacEncont = await EST.EstacionamentoModel.find({$or: [{nome: {$regex: `${estacionamento || ""}`, $options: "i"}},{endereco: {$regex: `${estacionamento || ""}`, $options: "i"}}]});
                    console.log(estacEncont);
                    if(estacEncont.length === 0){
                        return res.status(400).json({message: 'nenhum estacionamento com esse nome'});
                    }
                        return res.json(estacEncont);
                    } catch (err){
                        res.status(500).json({message: err.message}); 
                    }
                },
exports.EstacionamentoGetoneBYestac = async (req, res) => {
                    try{
                         const id = req.params.id;
                         const estacionamento = await EST.EstacionamentoModel.findOne({funcionario: id});
                         console.log(estacionamento);
                         res.json(estacionamento);
                    } catch (err) {
                     res.status(500)
                     .json({message: err.message});
                     }
                 }
    