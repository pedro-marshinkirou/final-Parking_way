import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import usuarioService from '../services/usuarioService';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';



const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {

    usuarioService
      .loginUsuario(email, senha)
      .then((response) => {
        
        if (response.status === 200 || response.status === 201) {
          var data = response.data.user; 
          if(!response.data.user.funcao){
            setEmail('');
            setSenha('');
            Alert.alert('Bem-vindo!' + response.data.user.nome);
            navigation.navigate('HomeCliente', {data});
          }
        }

        if (response.status === 200 || response.status === 201) {
          var data = response.data.user; 
          if(response.data.user.funcao){
            setEmail('');
            setSenha('');
            Alert.alert('Bem-vindo!' + response.data.user.nome);
            navigation.navigate('HomeFuncionario', {data});
          } 
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Email ou senha inválidos');
      });
  };

  const handleCadastro = () => {
    navigation.navigate('Sublogin');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentLogin}>
        <Image source={logo} 
               style={styles.imageSet} />
        <Text style={styles.heading}>Login</Text>

        <View style={styles.boxLogin}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#800080"
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#800080"
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
            required
          />
          {error && <Text style={styles.errorMessage}>{error}</Text>}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

 

        <View style={styles.boxLembrarSenha}>
          <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
            <Text style={styles.cadastroButtonText}>Crie uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#1a1a1a',
  },
  contentLogin: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 7,
    padding: 40,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    gap: 5,
  },
  heading: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 20,
    color: '#000000',
  },
  boxLogin: {
    position: 'relative',
    width: '50%',

  },
  errorMessage: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    fontSize: 14,
    color: '#4125f7',
    margin: 0,
  },
  input: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  button: {
    backgroundColor: '#800080',
    borderRadius: 24,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  boxLembrarSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  link: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  cadastroButton: {
    backgroundColor: '#800080',
    borderRadius: 14,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageSet: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default Login;