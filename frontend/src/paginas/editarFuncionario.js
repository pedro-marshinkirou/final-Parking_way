import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import funcionarioService from '../services/funcioService';
import { useNavigation, useRoute } from '@react-navigation/native';
import logo from '../../assets/logo.png';


function EditarFunc() {
    const route = useRoute();
    const navigation = useNavigation();
    const {data} = route.params;
    const [funcionario, setTableData] = useState([]);
    //console.log(data._id);

    async function fetchTableData() {

            try {
                const response = await funcionarioService.getFuncionariobyID(data._id);
                setTableData(response.data);

            } catch (error) {
                console.error(error);
            }

        };
        fetchTableData();

        const handleSubmit = async () => {
            try {
              var id = data._id;
              await funcionarioService.updtFuncionario(id, funcionario);
              alert('Dados atualizados com sucesso!');
            } catch (error) {
              console.error(error);
            }
          };

          const handleChange = (name, value) => {
            setTableData({
              ...funcionario,
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
                        {funcionario.map((func, index) => {
                            return <View style={styles.heading} key={func._id}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Nome"
                                        placeholderTextColor="#800080"
                                        value={func.nome}
                                        onChange={(text) => handleChange('nome', text)}
                                        required
                                        />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
                                        placeholderTextColor="#800080"
                                        value={func.email}
                                        onChange={(text) => handleChange('email', text)}
                                        required
                                        />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Telefone"
                                        placeholderTextColor="#800080"
                                        value={func.telefone}
                                        onChange={(text) => handleChange('telefone', text)}
                                        required
                                        />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Função"
                                        placeholderTextColor="#800080"
                                        value={func.funcao}
                                        onChange={(text) => handleChange('funcao', text)}
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
export default EditarFunc;