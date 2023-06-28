import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';

const Sublogin = () => {
  const navigation = useNavigation();

  const handleCadastro = () => {
    navigation.navigate('Cadcliente');
  };

  const handleCadfuncionario = () => {
    navigation.navigate('Cadfuncio');
  };

  /*const handleTESTE = () => {
        const now = new Date();
        const currentHour = now.getHours();
        const newHour = now.getHours() + 9; 
        const tempo = newHour - currentHour;
        const valorvaga = 6
        const valorfinal = tempo * valorvaga; 
        console.log('horaInicial:', currentHour);
        console.log('horaFinal', newHour);
        console.log('Tempo:', tempo);
        console.log('Valor final:', valorfinal);
  };*/

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentLogin}>
      <Image source={logo} 
               style={styles.imageSet} />
        <Text style={styles.heading}>Cadastre-se</Text>
 
        <View style={styles.boxLembrarSenha}>
          <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
            <Text style={styles.cadastroButtonText}>Cliente</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxLembrarSenha}>
          <TouchableOpacity style={styles.cadastroButton} onPress={handleCadfuncionario}>
            <Text style={styles.cadastroButtonText}>Funcionário</Text>
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
    backgroundColor: '#000000',
    borderRadius: 7,
    padding: 40,
    width:'100%' ,
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
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: '#000000',
  },
  boxLogin: {
    position: 'relative',
    width:'50%' ,

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
    borderRadius: 4,
    backgroundColor: '#252a34',
    color: '#fff',
  },
  button: {
    backgroundColor: 'linear-gradient(to right, #f72585, #ff0676)',
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
    marginTop: 10,
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
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  imageSet: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default Sublogin;