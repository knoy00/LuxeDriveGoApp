import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import {X} from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";



function Index() {
  const [region, setRegion] = useState(null);
  const [isFocused, setIsFocused] = useState(false);


  const translateY = useSharedValue(0);
  const animated = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(isFocused ? -600 : 0, {duration: 300})}]
  }))

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

  const close = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  }

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

      <Animated.View style={[styles.input_wrapper, animated, {borderTopLeftRadius: isFocused ? 0 : 20, borderTopRightRadius: isFocused ? 0 : 20}]}>
        {isFocused && <Pressable style={{ position: 'absolute', right: 20, top: 15, backgroundColor: '#222', width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={close}>
          <X size={23} color="#777" />
        </Pressable>}
        <View style={{marginTop: isFocused ? 58 : 18}}>
          {isFocused && <TextInput
            style={[styles.input_text, { borderColor: isFocused ? '#222' : '#efefef' }]}
            placeholder="Pick-up location"
            placeholderTextColor={'#777'}
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />}
          <TextInput
            style={[styles.input_text, { borderColor: isFocused ? '#222' : '#efefef', marginTop: isFocused ? 20 : 0 }]}
            placeholder="Where to?"
            placeholderTextColor={'#777'}
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        
      </Animated.View>

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
    top: '90%',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 0,
    height: '100%'
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
    marginTop: 0,
    borderWidth: 2,
    
  }
});
