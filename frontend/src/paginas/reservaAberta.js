import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import reservasService from '../services/reservasService';
import { useNavigation, useRoute } from '@react-navigation/native';
import logo from '../../assets/logo.png';


function ReservaAbert() {
    const route = useRoute();
    const navigation = useNavigation();
    const { data } = route.params
    const { estacionamento } = route.params
    console.log(estacionamento._id +'.......A1');
    const [tableData, setTableData] = useState([]);
    console.log(tableData);

    async function fetchTableData() {

        try {
            const response = await reservasService.getReservaAbertabyID(estacionamento._id);
            setTableData(response.data);
            console.log(response + '........A2')

        } catch (error) {
            console.error(error);
        }

    };
    

    async function handleCancelRes(field){
        console.log(field + '..........A7')
        const cancelada = await reservasService.getCancelarReservabyID(field);
        if(cancelada){
            alert('Reserva cancelada com sucesso!');
        }else{
            alert('Impossível cancelar');
        }
    };

    async function handleConfirmRes(field){
        console.log(field + '..........A8')
        const confirmada = await reservasService.getConfirmarReservabyID(field);
        if(confirmada){
            alert('Reserva confirmada com sucesso!');
        }else{
            alert('Impossível confirmar');
        }
    };

    const handleRecharge = () => {
        fetchTableData();
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.contentLogin}>
                <Image source={logo} style={styles.imageSet} />
                <Text style={styles.heading}>Reservas Abertas</Text>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        {tableData.map((Reserva, index) => {
                            return <View style={styles.heading} key={Reserva._id}>
                                <Text style={styles.Xheading}>Nº da reserva:{Reserva.numReserva}</Text>
                                <Text style={styles.Xheading}>Nome do Cliente:{Reserva.nomeCliente}</Text>
                                <Text style={styles.Xheading}>Modelo:{Reserva.modelo}</Text>
                                <Text style={styles.Xheading}>Placa:{Reserva.placa}</Text>
                                <Text style={styles.Xheading}>Telefone do cliente:{Reserva.telCliente}</Text>
                                <Text style={styles.Xheading}>Tipo de Vaga:{Reserva.tipoVaga}</Text>
                                <Text style={styles.Xheading}>Status:{Reserva.status}</Text>
                                <TouchableOpacity style={styles.btn} onPress={() => handleConfirmRes(Reserva._id)}>
                                    <Text style={styles.btnText}>Confirmar Reserva</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn} onPress={() => handleCancelRes(Reserva._id)}>
                                    <Text style={styles.btnText}>Cancelar Reserva</Text>
                                </TouchableOpacity>
                            </View>
                        })}
                        <TouchableOpacity style={styles.btn} onPress={handleRecharge}>
                                    <Text style={styles.btnText}>Recarregar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
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
        marginBottom: 20,
        marginTop: 5,
        borderRadius: 4,
        backgroundColor: '#252a34',
        color: '#fff',
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
        marginBottom: 10,
        color: '#800080',
    },
};
export default ReservaAbert;