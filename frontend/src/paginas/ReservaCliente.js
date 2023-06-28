import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import estacionamentoService from '../services/estacionamentoService';
import reservasService from '../services/reservasService';
import { useNavigation, useRoute } from '@react-navigation/native';
import logo from '../../assets/logo.png';
//import MapasLocalizacao from '../componentes/mapas';
import MapWithLocation from '../componentes/teste'


function ReservaCliente() {
    const route = useRoute();
    const navigation = useNavigation();
    const {data} = route.params
    console.log(data.nome);
    const [tableData, setTableData] = useState([]);
    const [estac, setEstac] = useState({});
/*    const [estacionamento, setEstacionamento] = useState({
        estacionamento: ''
    });*/
    const [estacionamento, setEstacionamento] = useState('');

    
        /*const handleChange = (name, value) => {
            setEstacionamento({
            ...estacionamento,
            [name]: value
            });
        };*/

        async function handleFinalizar(estac, data){
            console.log(estac.nome + '..........A7')
            console.log(data.nome + '..........A8')
            const efetuada = await reservasService.createReserva(estac, data);
            if(efetuada){
                alert('Reserva efetuada com sucesso!');
            }else{
                alert('Ocorreu algum erro ao reservar...');
            }
        };

        const handleSubmit = async () => {
            try {

                if (
                    estacionamento.estacionamento === ''
                  ) {
                    alert('Por Favor, insira um nome ou endereço teste');
                    return;
                  }                 
                console.log(estacionamento.estacionamento);
                console.log( typeof estacionamento.estacionamento);
                const response = await estacionamentoService.procurarEstacionamento(estacionamento.estacionamento);
                setTableData(response.data);                

                setEstacionamento({
                    estacionamento:''
                  });

            } catch (error) {
                console.error(error);
            }
          };

    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.contentLogin}>
                <Image source={logo} style={styles.imageSet} />
                <MapWithLocation/>
                <Text style={styles.heading}>Escolha Seu Estacionamento</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome ou endereço"
                        placeholderTextColor="#800080"
                        value={estacionamento}
                        onChangeText={(text) => setEstacionamento(text)}
                        required
                        />
                        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                            <Text style={styles.btnText}>Pesquisar</Text>
                        </TouchableOpacity>
                </View>
                        {tableData.map((estac, index) => {
                            return <View style={styles.heading} key={estac._id}>
                                    <Text style={styles.Xheading}>Nome:{estac.nome}</Text>
                                    <Text style={styles.Xheading}>Quantidade de vagas:{estac.quantidade_vagas}</Text>
                                    <Text style={styles.Xheading}>Telefone:{estac.telefone}</Text>
                                    <Text style={styles.Xheading}>Endereço:{estac.endereco}</Text>
                                    <Text style={styles.Xheading}>CEP:{estac.cep}</Text>
                                    <Text style={styles.Xheading}>Valor da Vaga:{estac.valor_vaga}</Text>
                                    <Text style={styles.Xheading}>Nome do Proprietário:{estac.nome_proprietario}</Text>
                                    <Text style={styles.Xheading}>Valor para Reservar:{estac.valor_espera}</Text>
                                    <Text style={styles.Xheading}>Limite MAX de Horas:{estac.limite_horas}</Text>
                                    <TouchableOpacity key={estac._id} style={styles.btn} onPress={() => handleFinalizar(estac, data)}>
                                        <Text style={styles.btnText}>Reservar!</Text>
                                    </TouchableOpacity>
                                </View>
                        })}
                </View>
                </ScrollView>
            </SafeAreaView>
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
            backgroundColor: '#ffffff',
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
            fontSize: 20,
            fontWeight: '500',
            marginBottom: 20,
            color: '#800080',
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
            borderColor: '#555',
            marginBottom: 20,
            marginTop: 5,
            borderRadius: 34,
            backgroundColor: '#fff',
            color: '#000000',
        },
        button: {
            backgroundColor: 'linear-gradient(to right, #f72585, #ff0676)',
            borderRadius: 4,
            padding: 15,
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: '#cbd0f7',
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
            backgroundColor: '#4056d7',
            borderRadius: 4,
            padding: 15,
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        cadastroButtonText: {
            color: '#cbd0f7',
            fontSize: 18,
        },
        imageSet: {
            width: 200,
            height: 200,
        },
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
          },
          item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 60
          },
          normal: {
            fontSize: 32,
          },
          Xheading: {
            fontSize: 15,
            fontWeight: '500',
            marginBottom: 5,
            color: '#800080',
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
    };
export default ReservaCliente;