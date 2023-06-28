import axios from 'axios';


var funcionarioService = {
  
  // método para cadastrar um funcionário
  postFuncion: async (Cadastro) => {
    var Funciocad = await axios.post(`http://10.0.2.2:5000/apifuncio/`,Cadastro);
    return Funciocad;
  },

  // método para validar o login do usuário
  loginFuncion: async (email, senha) => {
    var Funciocad = await axios.post(`http://10.0.2.2:5000/apifuncio/login`, { email, senha });
    return Funciocad;
  },

  getFuncionariobyID: async (id) => {
    var funcONEAPI = await axios.get(`http://10.0.2.2:5000/apifuncio/`+ id);
    return funcONEAPI;
  },

  updtFuncionario: async (id, funcio) =>{
    var funcioUpdate = await axios.put(`http://10.0.2.2:5000/apifuncio/`+ id, {funcio});
    return funcioUpdate;
  },
}

export default funcionarioService;