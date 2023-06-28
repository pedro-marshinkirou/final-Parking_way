import axios from 'axios';

var estacionamentoService = {

  // método para cadastrar um funcionário
  createEstacionamento: async (Cadastro) => {
    var Estacionamento = await axios.post(`http://10.0.2.2:5000/apiestacionamento/`, Cadastro);
    return Estacionamento;
  },

  // método para validar o login do usuário
  loginFuncion: async (email, senha) => {
    var Funciocad = await axios.post(`http://10.0.2.2:5000/apifuncio/login`, { email, senha });
    return Funciocad;
  },


  getEstacionamentos: async () => {
    var estacAPI = await axios.get(`http://10.0.2.2:5000/apiestacionamento/`);
    return  estacAPI;
  },

  getEstacionamentobyID: async (id) => {
    var estacONEAPI = await axios.get(`http://10.0.2.2:5000/apiestacionamento/byUser/`+ id);
    return estacONEAPI;
  },

  updtEstacionamento: async (id, estacionamento) =>{
    var estacUpdate = await axios.put(`http://10.0.2.2:5000/apiestacionamento/`+ id, {estacionamento});
    return estacUpdate;
  },

  procurarEstacionamento: async (estacionamento) => {
    console.log(estacionamento);
    console.log(typeof estacionamento);
    var Estacionamento = await axios.get(`http://10.0.2.2:5000/apiestacionamento/procurarpor`, {estacionamento});
    return Estacionamento;
  },

  getEstacionamentobyIDfunc: async (id) => {
    var estacONEAPI = await axios.get(`http://10.0.2.2:5000/apiestacionamento/byEstac/`+ id);
    return estacONEAPI;
  }
}

export default estacionamentoService;