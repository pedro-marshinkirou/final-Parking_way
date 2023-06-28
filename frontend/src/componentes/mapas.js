import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import * as Permissions from 'expo-permissions';

const MapasLocalizacao = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const checkLocationPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === 'granted') {
        // Solicita permissão de localização ao usuário
        Geolocation.requestAuthorization();

        // Obtém a localização atual do dispositivo
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            const region = {
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            };
            setInitialRegion(region);
            setUserLocation(region);
          },
          error => {
            console.log('Erro ao obter localização:', error);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      } else {
        console.log('Permissão de localização não concedida');
        // Aqui você pode lidar com o caso em que a permissão não é concedida
      }
    };

    // Chame a função para verificar e solicitar a permissão
    checkLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView style={styles.map} initialRegion={initialRegion}>
          {userLocation && (
            <Marker coordinate={userLocation} title="Localização" />
          )}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapasLocalizacao;
