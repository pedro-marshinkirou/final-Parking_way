import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import estacionamentoService from '../services/estacionamentoService';
import { useNavigation, useRoute } from '@react-navigation/native';
import logo from '../../assets/logo.png';


function EstacFunc() {
    const route = useRoute();
    const navigation = useNavigation();
    const {data} = route.params
    console.log(data.nome);
    const [tableData, setTableData] = useState([]);

    async function fetchTableData() {

            try {
                const response = await estacionamentoService.getEstacionamentos();
                setTableData(response.data);

            } catch (error) {
                console.error(error);
            }

        };
        fetchTableData();

    return (
        <View style={styles.wrapper}>
            <View style={styles.contentLogin}>
                <Image source={logo} style={styles.imageSet} />
                <Text style={styles.heading}>Estacionamentos</Text>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        {tableData.map((estac, index) => {
                            return <View style={styles.heading} key={estac._id}>
                                    <Text style={styles.Xheading}>nome:{estac.nome}</Text>
                                    <Text style={styles.Xheading}>descricao:{estac.descricao}</Text>
                                    <Text style={styles.Xheading}>quantidade de vagas:{estac.quantidade_vagas}</Text>
                                    <Text style={styles.Xheading}>telefone:{estac.telefone}</Text>
                                    <Text style={styles.Xheading}>endereço:{estac.endereco}</Text>
                                    <Text style={styles.Xheading}>CEP:{estac.cep}</Text>
                                    <Text style={styles.Xheading}>Valor da Multa:{estac.valor_multa}</Text>
                                    <Text style={styles.Xheading}>Valor da Vaga:{estac.valor_vaga}</Text>
                                    <Text style={styles.Xheading}>Valor da Hora Extra:{estac.valor_hora_extra}</Text>
                                    <Text style={styles.Xheading}>Valor da tx de Cancelamento:{estac.taxa_cancelamento}</Text>
                                    <Text style={styles.Xheading}>CNPJ:{estac.cnpj}</Text>
                                    <Text style={styles.Xheading}>Nome do Proprietário:{estac.nome_proprietario}</Text>
                                    <Text style={styles.Xheading}>Valor para Espera:{estac.valor_espera}</Text>
                                    <Text style={styles.Xheading}>Limite MAX de Horas:{estac.limite_horas}</Text>
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
    };
export default EstacFunc;