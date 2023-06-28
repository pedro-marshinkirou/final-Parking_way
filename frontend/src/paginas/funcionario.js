import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import funcionarioService from '../services/funcioService';


const Cadfuncio = () => {
  const [formData, setFormData] = useState({
    nome: '',
    senha: '',
    email: '',
    telefone: '',
    funcao:''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      if (
        formData.nome.trim() === '' ||
        formData.senha.trim() === '' ||
        formData.email.trim() === '' ||
        formData.telefone.trim() === '' ||
        formData.funcao.trim() === ''
      ) {
        alert('Preencha todos os campos!');
        return;
      }
  
      await funcionarioService.postFuncion(formData);
      alert('funcionário Cadastrado com sucesso!');
  
      // Zerar os valores dos inputs
      setFormData({
        nome: '',
        senha: '',
        email: '',
        telefone: '',
        funcao:''
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastre-se</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#800080"
          value={formData.nome}
          onChangeText={(text) => handleChange('nome', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#800080"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#800080"
          value={formData.senha}
          onChangeText={(text) => handleChange('senha', text)}
          secureTextEntry
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#800080"
          value={formData.telefone}
          onChangeText={(text) => handleChange('telefone', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="função: adm ou atd"
          placeholderTextColor="#800080"
          value={formData.funcao}
          onChangeText={(text) => handleChange('funcao', text)}
          required
        />
      </View>
      <Button title="Cadastrar" onPress={handleSubmit} color="#800080"/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width:"100%",
  },
  heading: {
    padding: 0,
    margin: 0,
    fontWeight: '500',
    fontSize: 23,
    color: '#000000',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
    width:"50%",
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  input: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#555',
    marginTop: 5,
    borderRadius: 14,
    backgroundColor: '#fff',
    color: '#000000',
    width: '100%',
  },
};

export default Cadfuncio;
