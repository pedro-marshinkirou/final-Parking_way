import axios from 'axios';

var reservasService = {

  // método para cadastrar um funcionário
  createReserva: async (estac, data) => {
    console.log( typeof estac);
    console.log(estac.nome + ".........A9");
    console.log( typeof data);
    console.log(data.nome +"..........A10");
    var randomNum = Math.floor(Date.now() * Math.random()).toString(32)
    console.log(randomNum + "...........A11");
    var Eftreserva = {
        numReserva: randomNum,
        horaInicio: '',
        horaFinal: '',
        funcionario: estac.funcionario,
        cliente: data._id,
        estacionamento: estac._id,
        nomeEstac: estac.nome,
        endereco: estac.endereco,
        telCliente: data.telefone,
        nomeCliente: data.nome,
        placa: data.placa,
        modelo: data.modelo,
        localInicial: '',
        localFinal: '',
        status: 'ABERTA',
        valorVaga: estac.valor_vaga,
        tempo: '',
        valorFinal: '',
        tipoVaga: 'Normal',
        pagConfirm: 'NPG',
    }
    var ReservaUnica = await axios.post(`http://10.0.2.2:5000/apireserva/`, Eftreserva);
    return ReservaUnica;
  },

  getReservaAbertabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaAbt = await axios.get(`http://10.0.2.2:5000/apireserva/abertas/`+ id);
    console.log(reservaAbt +'........A4');
    return reservaAbt;
  },

  getCancelarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservacanc = await axios.put(`http://10.0.2.2:5000/apireserva/cancelar/`+ id);
    console.log(reservacanc +'........A4');
    return reservacanc;
  },

  getConfirmarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaconf = await axios.put(`http://10.0.2.2:5000/apireserva/confirma/`+ id);
    console.log(reservaconf +'........A4');
    return reservaconf;
  },

  getReservaCanceladaBYID: async (id) => {
    console.log(id +'.......A3');
    var reservascanc = await axios.get(`http://10.0.2.2:5000/apireserva/canceladas/`+ id);
    console.log(reservascanc +'........A4');
    return reservascanc;
  },

  getReservasConfirmadasBYID: async (id) => {
    console.log(id +'.......A3');
    var reservasconfirmdas = await axios.get(`http://10.0.2.2:5000/apireserva/confirmadas/`+ id);
    console.log(reservasconfirmdas +'........A4');
    return reservasconfirmdas;
  },

  getIniciarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaInit = await axios.put(`http://10.0.2.2:5000/apireserva/iniciar/`+ id);
    console.log(reservaInit +'........A4');
    return reservaInit;
  },

  getReservasIniciadasBYID: async (id) => {
    console.log(id +'.......A3');
    var reservasInitiadas = await axios.get(`http://10.0.2.2:5000/apireserva/iniciadas/`+ id);
    console.log(reservasInitiadas +'........A4');
    return reservasInitiadas;
  },

  getEncerrarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaEncerr = await axios.put(`http://10.0.2.2:5000/apireserva/encerra/`+ id);
    console.log(reservaEncerr +'........A4');
    return reservaEncerr;
  },

  getReservasEncerradasBYID: async (id) => {
    console.log(id +'.......A3');
    var reservasEncerradas = await axios.get(`http://10.0.2.2:5000/apireserva/encerradas/`+ id);
    console.log(reservasEncerradas +'........A4');
    return reservasEncerradas;
  },

  getFinalizarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaFinalizada = await axios.put(`http://10.0.2.2:5000/apireserva/finalizar/`+ id);
    console.log(reservaFinalizada +'........A4');
    return reservaFinalizada;
  },

  getReservasFinalizadasBYID: async (id) => {
    console.log(id +'.......A3');
    var reservasFNLZDS = await axios.get(`http://10.0.2.2:5000/apireserva/finalizadas/`+ id);
    console.log(reservasFNLZDS +'........A4');
    return reservasFNLZDS;
  },

}

export default reservasService;