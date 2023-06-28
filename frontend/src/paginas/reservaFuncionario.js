import React, {useState}from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import estacionamentoService from '../services/estacionamentoService';

const MenuReservas = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {data} = route.params
  //console.log(data.nome);
  //console.log(data._id);
  const [estacionamento, setEstacionamento] = useState({});
  //console.log(estacionamento);

  async function findEstacionamento() {

    try {
        const response = await estacionamentoService.getEstacionamentobyIDfunc(data._id);
        setEstacionamento(response.data);

    } catch (error) {
        console.error(error);
    }

  };
  findEstacionamento();

  const handleResABER = () => {
    navigation.navigate('ReservaAbert', {data, estacionamento});
  };

  const handleResCONF = () => {
    navigation.navigate('ReservaConfirm', {data, estacionamento});
  };

  const handleResINIT = () => {
    navigation.navigate('ReservaInitiada', {data, estacionamento});
  };

  const handleResENC= () => {
    navigation.navigate('ReservaEncerrad', {data, estacionamento});
  };

  const handleResFIN= () => {
    navigation.navigate('ReservasFinalizad', {data, estacionamento});
  };

  const handleResCancl = () => {
    navigation.navigate('ReservasCanceladas', {data, estacionamento});
  };

  return (
    <View style={styles.page}>
      <View style={styles.formLogin}>
        <Text style={styles.title}>MenuReservas</Text>
        <Text style={styles.description}>Menu de Reservas</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpacer} />
          <TouchableOpacity style={styles.btn} onPress={handleResABER}>
            <Text style={styles.btnText}>Reservas Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleResCONF}>
            <Text style={styles.btnText}>
              Reservas Confirmadas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleResINIT}>
            <Text style={styles.btnText}>
              Reservas Iniciadas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleResENC}>
            <Text style={styles.btnText}>Reservas Encerradas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleResFIN}>
            <Text style={styles.btnText}>Reservas Finalizadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleResCancl}>
            <Text style={styles.btnText}>Reservas Canceladas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  formLogin: {
    backgroundColor: '#dcdcdc',
    borderRadius: 7,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 5,
  },
  title: {
    padding: 0,
    margin: 0,
    fontWeight: '500',
    fontSize: 28,
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  btn: {
    backgroundColor: '#800080',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  btn1: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    paddingVertical: 9,
    paddingHorizontal: 100,
    margin: 10,
    shadowColor: '#000',
  },
  btnText1: {
    color: '#800080',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonSpacer: {
    width: 10, // Espaço desejado entre os botões
  },
  link: {
    color: '#000000',
  },
};

export default MenuReservas;
