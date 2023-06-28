import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView} from 'react-native';
import estacionamentoService from '../services/estacionamentoService';
import { useNavigation, useRoute } from '@react-navigation/native';

const Estacionamento = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {data} = route.params
  console.log(data.nome);
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    quantidade_vagas: '', 
    telefone: '', 
    endereco: '', 
    cep: '', 
    valor_multa: '', 
    valor_vaga: '', 
    valor_hora_extra: '', 
    taxa_cancelamento: '', 
    cnpj: '', 
    nome_proprietario: '', 
    funcionario: '', 
    valor_espera: '', 
    limite_horas: ''
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
        formData.descricao.trim() === '' ||
        formData.quantidade_vagas.trim() === '' ||
        formData.telefone.trim() === '' ||
        formData.endereco.trim() === '' ||
        formData.cep.trim() === '' ||
        formData.valor_multa.trim() === '' ||
        formData.valor_vaga.trim() === '' ||
        formData.valor_hora_extra.trim() === '' ||
        formData.taxa_cancelamento.trim() === '' ||
        formData.cnpj.trim() === '' ||
        formData.nome_proprietario.trim() === '' ||
        formData.valor_espera.trim() === '' ||
        formData.limite_horas.trim() === ''
      ) {
        alert('Preencha todos os campos!');
        return;
      }
      formData.funcionario = data._id;
      console.log(formData.funcionario);
      var Lock = await estacionamentoService.getEstacionamentobyID(data._id);
      console.log(Lock.data);
      if (Lock.data.length == 1) {
        alert('Este Funcionário não pode mais cadastrar!');
      } 
      else {
        await estacionamentoService.createEstacionamento(formData);
        alert('Estacionamento cadastrado com sucesso!');
      } 
      // Zerar os valores dos inputs
      setFormData({
        nome: '',
        descricao: '',
        quantidade_vagas: '', 
        telefone: '', 
        endereco: '', 
        cep: '', 
        valor_multa: '', 
        valor_vaga: '', 
        valor_hora_extra: '', 
        taxa_cancelamento: '', 
        cnpj: '', 
        nome_proprietario: '', 
        funcionario: '', 
        valor_espera: '', 
        limite_horas: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastrar Estacionamento</Text>
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
          placeholder="Descrição"
          placeholderTextColor="#800080"
          value={formData.descricao}
          onChangeText={(text) => handleChange('descricao', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Quantidade de vagas"
          placeholderTextColor="#800080"
          value={formData.quantidade_vagas}
          onChangeText={(text) => handleChange('quantidade_vagas', text)}
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
          placeholder="Endereço"
          placeholderTextColor="#800080"
          value={formData.endereco}
          onChangeText={(text) => handleChange('endereco', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#800080"
          value={formData.cep}
          onChangeText={(text) => handleChange('cep', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Valor da multa"
          placeholderTextColor="#800080"
          value={formData.valor_multa}
          onChangeText={(text) => handleChange('valor_multa', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Valor da vaga"
          placeholderTextColor="#800080"
          value={formData.valor_vaga}
          onChangeText={(text) => handleChange('valor_vaga', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Valor hora extra"
          placeholderTextColor="#800080"
          value={formData.valor_hora_extra}
          onChangeText={(text) => handleChange('valor_hora_extra', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Taxa cancelamento"
          placeholderTextColor="#800080"
          value={formData.taxa_cancelamento}
          onChangeText={(text) => handleChange('taxa_cancelamento', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          placeholderTextColor="#800080"
          value={formData.cnpj}
          onChangeText={(text) => handleChange('cnpj', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Proprietário"
          placeholderTextColor="#800080"
          value={formData.nome_proprietario}
          onChangeText={(text) => handleChange('nome_proprietario', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Valor de espera"
          placeholderTextColor="#800080"
          value={formData.valor_espera}
          onChangeText={(text) => handleChange('valor_espera', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Limite de horas"
          placeholderTextColor="#800080"
          value={formData.limite_horas}
          onChangeText={(text) => handleChange('limite_horas', text)}
          required
        />
      </View>
      <Button title="Cadastrar" onPress={handleSubmit} color="#800080"/>
    </View>
  </ScrollView>
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

export default Estacionamento;
