import axios from 'axios';


var clienteService = {
  
  // método para cadastrar um usuário
  postCliente: async (Cadastro) => {
    var Clientecad = await axios.post(`http://10.0.2.2:5000/apicliente/`,Cadastro);
    return Clientecad;
  },

  // método para validar o login do usuário
  loginUsuario: async (email, senha) => {
    var ClienteLog = await axios.post(`http://10.0.2.2:5000/validUsuario/login_auth`, { email, senha });
    return ClienteLog;
  },

  getCliente: async(id) => {
    var Clientertrnd = await axios.get(`http://10.0.2.2:5000/apicliente/`+ id);
    return Clientertrnd;
  },

  updtCliente: async (id, cliente) =>{
    var clienteUpdate = await axios.put(`http://10.0.2.2:5000/apicliente/`+ id, {cliente});
    return clienteUpdate;
  },
}

export default clienteService;