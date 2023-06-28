import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import clienteService from '../services/usuarioService';
import { useNavigation, useRoute } from '@react-navigation/native';
import logo from '../../assets/logo.png';


function PerfilCliente() {
    const route = useRoute();
    const navigation = useNavigation();
    const { data } = route.params
    const [tableData, setTableData] = useState([]);

    async function fetchTableData() {

        try {
            const response = await clienteService.getCliente(data._id);
            setTableData(response.data);

        } catch (error) {
            console.error(error);
        }

    };
    fetchTableData();

    const handleditCliente = () => {
        navigation.navigate('EditarCliente', { data });
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.contentLogin}>
                <Image source={logo} style={styles.imageSet} />
                <Text style={styles.heading}>Meu perfil</Text>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        {tableData.map((cliente, index) => {
                            return <View style={styles.heading} key={cliente._id}>
                                <Text style={styles.Xheading}>Nome:{cliente.nome}</Text>
                                <Text style={styles.Xheading}>Email:{cliente.email}</Text>
                                <Text style={styles.Xheading}>Telefone:{cliente.telefone}</Text>
                                <Text style={styles.Xheading}>Modelo do veículo:{cliente.modelo}</Text>
                                <Text style={styles.Xheading}>Placa do veículo:{cliente.placa}</Text>
                                <TouchableOpacity style={styles.btn} onPress={handleditCliente}>
                                    <Text style={styles.btnText}>Editar Perfil</Text>
                                </TouchableOpacity>
                            </View>
                        })}
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
export default PerfilCliente;