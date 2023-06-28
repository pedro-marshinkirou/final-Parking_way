import React, {useState, useEffect} from "react";
import { View, Text, Platform, PermissionsAndroid, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';
import MapView from 'react-native-maps';

const MapaInicial = () => {
    const[regiao, setRegiao] = useState(null);
    const[reserva, setReserva] = useState({});
    const {width, height} = Dimensions.get('screen');
    const route = useRoute();
    const navigation = useNavigation();
    const {data} = route.params
    const {estac} = route.params
    console.log({data});
    console.log({estac});

   /* useEffect(() => {
        getMyCurrentLocation()
    }, [])

    function getMyCurrentLocation(){
        Geolocation.getCurrentPosition(info => {
            console.log("LAT", info.coords.latitude)
            console.log("LONG", info.coords.longitude)

            setRegiao({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            })

        },
        () => { console.log("ERRO")},{
            enableHighAccuracy: true,
            timeout: 2000,
        })
    }*/

    function AnotherLocation(e){
        console.log("DIFFERENT LAT", e.nativeEvent.coordinate.latitude),
        console.log("DIFFERENT LONG",e.nativeEvent.coordinate.longitude)
    }

    const handleSubmit = () => {
      try{
      setReserva({
        horaInicio: '',
        horaFinal: '',
        funcionario: estac.funcionario,
        cliente: data._id,
        estacionamento: estac._id,
        nomeEstac: estac.nome,
        endereco: estac.endereco,
        telCliente: data.telefone,
        nomeCliente: data.nome,
        placa: data.placa,
        modelo: data.modelo,
        localInicial: '',
        localFinal: '',
        status: 'ABERTA',
        valorVaga: estac.valor_vaga,
        tempo: '',
        valorFinal: '',
        tipoVaga: 'Normal',
        pagConfirm: 'NPG',
      })
        console.log(reserva);
        console.log(estac);
        console.log(data);
        navigation.navigate('EfetuarReserva', {reserva});
      } catch (error) {
        console.error(error);
      }
    }

    return(
        <View style = {styles.buttonContainer}>
            <MapView
                onMapReady={() => {
                    Platform.OS === 'android' ?
                    PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                        .then(() => {
                            console.log("USUARIO CONFIRMOU")
                        })
                    :''
                }}
                style={{width:'100%', height:'75%'}}
                region={''}
                zoomEnabled={true}
                minZoomLevel={18}
                showsUserLocation={true}
                loadingEnabled={true}
                onPress={(e) => AnotherLocation(e)}
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Efetuar Reserva</Text>
              </TouchableOpacity>
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
    btn1: {
      backgroundColor: '#ffffff',
      borderRadius: 40,
      paddingVertical: 9,
      paddingHorizontal: 100,
      margin: 10,
      shadowColor: '#000',
    },
    btnText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
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

export default MapaInicial;