const Reserva = require("../models/reservas");
mongoose = require("mongoose");

exports.createReserva = async (req, res) => {  
    try{ 
              var { 
                data,
                numReserva,
                horaInicio,
                horaFinal,
                funcionario,
                cliente,
                estacionamento,
                nomeEstac,
                endereco,
                telCliente,
                nomeCliente,
                placa,
                modelo,
                localInicial,
                localFinal,
                status,
                valorVaga,
                tempo,
                valorFinal,
                tipoVaga,
                pagConfirm } = req.body;

                var reserva = await Reserva.ReservaModel.create(req.body)
                    .catch((err) => console.log(err.messsage));
                if (!reserva){
                    return res.status(400).json({ message: "Erro ao cadastrar Reserva" });
                }
                res.status(201).json({
                    messsage: "Reserva cadastrado com sucesso",
                        Reserva: {
                        id: reserva._id,
                        data,
                        numReserva,
                        horaInicio,
                        horaFinal,
                        funcionario,
                        cliente,
                        estacionamento,
                        nomeEstac,
                        endereco,
                        telCliente,
                        nomeCliente,
                        placa,
                        modelo,
                        localInicial,
                        localFinal,
                        status,
                        valorVaga,
                        tempo,
                        valorFinal,
                        tipoVaga,
                        pagConfirm
                    },
                });
            } catch (err){
                res.status(500).json({ message: err.message})
            }
            },
exports.getReservas = async (req, res) => {
            try{
                var Reservas = await Reserva.ReservaModel.find();

                if(Reservas.length === 0){
                    return res.status(400)
                    .json({message: "não há Reserva cadastrados"});
                }

                res.json(Reservas);
            } catch (err) {
                res.status(500)
                .json({message: err.message});
            }
        },
exports.reservaGetone = async (req, res) => {
           try{
                const id = req.params.id;
                const reservas = await Reserva.ReservaModel.findById(id);
                console.log(reservas);
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.reservaUpdate = async (req, res) => {
            try{
                id = req.params.id;
                await Reserva.ReservaModel.findByIdAndUpdate(id,req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.reservaFUNCupdate = async (req, res) => {
            try{
                id = req.params.id;
                await Reserva.ReservaModel.findOneAndUpdate({funcionario: id},req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.cancelaReserva = async (req, res) => {   
            try {
                id = req.params.id
                console.log(id);
                res.status(201).json(await Reserva.ReservaModel.findByIdAndUpdate(id,{ status: 'CANCELADA' } ));
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
            },
exports.reservaCLIENTEUpdate = async (req, res) => {
            try{
                id = req.params.id;
                await Reserva.ReservaModel.findOneAndUpdate({cliente: id},req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.reservaGetabertas = async (req, res) => {
           try{
                const id = req.params.id;
                console.log(id + '.......A5');
                const reservas = await Reserva.ReservaModel.find({estacionamento: id, status: 'ABERTA'}).sort({_id: -1});
                console.log(reservas+ '........A6');
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.confirmaReserva = async (req, res) => {   
            try {
                id = req.params.id
                console.log(id);
                res.status(201).json(await Reserva.ReservaModel.findByIdAndUpdate(id,{ status: 'CONFIRMADA' } ));
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
            },
exports.encerraReserva = async (req, res) => {   
            try {
                id = req.params.id
                console.log(id);
                const hora = new Date();
                const hora_agora = hora.getHours() + 2;
                await Reserva.ReservaModel.findByIdAndUpdate(id,{horaFinal: hora_agora} )
                var editable = await Reserva.ReservaModel.findById(id);
                console.log(editable)
                var valor_final = (editable.horaFinal - editable.horaInicio) * editable.valorVaga;
                res.status(201).json(await Reserva.ReservaModel.findByIdAndUpdate(id,{ status: 'ENCERRADA', valorFinal: valor_final} ));
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
            },
exports.reservaGetconfirmadas = async (req, res) => {
           try{
                const id = req.params.id;
                const reservas = await Reserva.ReservaModel.find({estacionamento: id, status: 'CONFIRMADA'}).sort({_id: -1});
                console.log(reservas);
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.reservaGetcanceladas = async (req, res) => {
           try{
                const id = req.params.id;
                const reservas = await Reserva.ReservaModel.find({estacionamento: id, status: 'CANCELADA'}).sort({_id: -1});
                console.log(reservas);
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.reservaGetencerradas = async (req, res) => {
           try{
                const id = req.params.id;
                const reservas = await Reserva.ReservaModel.find({estacionamento: id, status: 'ENCERRADA'}).sort({_id: -1});
                console.log(reservas);
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.iniciarReserva = async (req, res) => {   
            try {
                id = req.params.id
                console.log(id);
                const hora = new Date();
                const hora_agora = hora.getHours();
                res.status(201).json(await Reserva.ReservaModel.findByIdAndUpdate(id,{ status: 'INICIADA' , horaInicio: hora_agora} ));
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
            },
exports.reservaGetIniciadas = async (req, res) => {
           try{
                const id = req.params.id;
                const reservas = await Reserva.ReservaModel.find({estacionamento: id, status: 'INICIADA'}).sort({_id: -1});
                console.log(reservas);
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.finalizarReserva = async (req, res) => {   
            try {
                id = req.params.id
                console.log(id);
                res.status(201).json(await Reserva.ReservaModel.findByIdAndUpdate(id,{ status: 'FINALIZADA', pagConfirm: 'PAGO' } ));
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
            },
exports.reservaGetfinalizadas = async (req, res) => {
           try{
                const id = req.params.id;
                const reservas = await Reserva.ReservaModel.find({estacionamento: id, status: 'FINALIZADA'}).sort({_id: -1});
                console.log(reservas);
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.reservaGetfinalizadasCliente = async (req, res) => {
            try{
                 const id = req.params.id;
                 const reservas = await Reserva.ReservaModel.find({cliente: id, status: 'FINALIZADA'}).sort({_id: -1});
                 console.log(reservas);
                 res.json(reservas);
            } catch (err) {
             res.status(500)
             .json({message: err.message});
             }
         }