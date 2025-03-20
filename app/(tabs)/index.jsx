import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';

function Index() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const customMapStyle = [
    {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#d8d8d8" }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        { "color": "#f0f0f0" }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#e0e0e0" }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#e7e7e7" }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#a0d7e7" }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      {region && (
        <MapView
          style={styles.map}
          customMapStyle={customMapStyle}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={region}
        />
      )}

      <View style={styles.input_wrapper}>
        <TextInput
          style={styles.input_text}
          placeholder="Where to?"
          placeholderTextColor={'#777'}
          returnKeyType="go"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <BottomSheet />

    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input_wrapper: {
    position: 'absolute',
    top: '89%',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  input_text: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#222222',
    fontSize: 17,
    fontWeight: '400',
    backgroundColor: '#efefef',
  }
});
