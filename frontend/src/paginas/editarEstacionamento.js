import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import estacionamentoService from '../services/estacionamentoService';
import { useNavigation, useRoute } from '@react-navigation/native';
import logo from '../../assets/logo.png';


function EditarEstacionamento() {
    const route = useRoute();
    const navigation = useNavigation();
    const {data} = route.params;
    const [estacionamento, setTableData] = useState([]);
    console.log(data._id);

    async function fetchTableData() {

            try {
                const response = await estacionamentoService.getEstacionamentobyID(data._id);
                setTableData(response.data);

            } catch (error) {
                console.error(error);
            }

        };
        fetchTableData();

        const handleSubmit = async () => {
            try {
              var id = data._id;
              await estacionamentoService.updtEstacionamento(id, estacionamento);
              alert('Dados atualizados com sucesso!');
            } catch (error) {
              console.error(error);
            }
          };

          const handleChange = (name, value) => {
            setTableData({
              ...estacionamento,
              [name]: value
            });
          };

    return (
        <View style={styles.wrapper}>
            <View style={styles.contentLogin}>
                <Image source={logo} style={styles.imageSet} />
                <Text style={styles.heading}>Edição de Perfil</Text>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        {estacionamento.map((estac, index) => {
                            return <View style={styles.heading} key={estac._id}>
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Nome"
                                            placeholderTextColor="#800080"
                                            value={estac.nome}
                                            onChangeText={(text) => handleChange('nome', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Descrição"
                                            placeholderTextColor="#800080"
                                            value={estac.descricao}
                                            onChangeText={(text) => handleChange('descricao', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Quantidade de vagas"
                                            placeholderTextColor="#800080"
                                            value={estac.quantidade_vagas}
                                            onChangeText={(text) => handleChange('quantidade_vagas', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Telefone"
                                            placeholderTextColor="#800080"
                                            value={estac.telefone}
                                            onChangeText={(text) => handleChange('telefone', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Endereço"
                                            placeholderTextColor="#800080"
                                            value={estac.endereco}
                                            onChangeText={(text) => handleChange('endereco', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="CEP"
                                            placeholderTextColor="#800080"
                                            value={estac.cep}
                                            onChangeText={(text) => handleChange('cep', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Valor da multa"
                                            placeholderTextColor="#800080"
                                            value={estac.valor_multa}
                                            onChangeText={(text) => handleChange('valor_multa', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Valor da vaga"
                                            placeholderTextColor="#800080"
                                            value={estac.valor_vaga}
                                            onChangeText={(text) => handleChange('valor_vaga', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Valor hora extra"
                                            placeholderTextColor="#800080"
                                            value={estac.valor_hora_extra}
                                            onChangeText={(text) => handleChange('valor_hora_extra', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Taxa cancelamento"
                                            placeholderTextColor="#800080"
                                            value={estac.taxa_cancelamento}
                                            onChangeText={(text) => handleChange('taxa_cancelamento', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="CNPJ"
                                            placeholderTextColor="#800080"
                                            value={estac.cnpj}
                                            onChangeText={(text) => handleChange('cnpj', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Proprietário"
                                            placeholderTextColor="#800080"
                                            value={estac.nome_proprietario}
                                            onChangeText={(text) => handleChange('nome_proprietario', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Valor de espera"
                                            placeholderTextColor="#800080"
                                            value={estac.valor_espera}
                                            onChangeText={(text) => handleChange('valor_espera', text)}
                                            required
                                            />
                                            <TextInput
                                            style={styles.input}
                                            placeholder="Limite de horas"
                                            placeholderTextColor="#800080"
                                            value={estac.limite_horas}
                                            onChangeText={(text) => handleChange('limite_horas', text)}
                                            required
                                            />
                                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                                        <Text style={styles.btnText}>Salvar alterações</Text>
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
            borderColor: '#555',
            marginTop: 5,
            borderRadius: 14,
            backgroundColor: '#fff',
            color: '#000000',
            width: '100%',
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
export default EditarEstacionamento;