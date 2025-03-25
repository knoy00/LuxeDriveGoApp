import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Pressable, Keyboard, FlatList, Text, ScrollView } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import {X, Bus} from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import axios from 'axios';
import MapViewStyling from '../../app/Utils/MapViewStyiling.json'
import { useRouter } from 'expo-router';
import ChooseRide from '../ChooseRide';
import { Platform } from 'react-native';



function Index() {

  let MapView, Marker;
  if (Platform.OS !== 'web') {
  MapView = require('react-native-maps').default;
  Marker = require('react-native-maps').Marker;
  }
  const router = useRouter()

  const [region, setRegion] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const [isActive, setIsActive] = useState(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);


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

  // useEffect(() => {
  //   console.log(searchText)
  // }, [searchText])

  const handleText = async (text) => {
    setSearchText(text);

    if(text.length > 2){
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${text}`
        )
        const data =  response.data;
        setSearchResult(data);
      }
      catch (error){
        console.log("Error fetching data:", error);
      }
    }
    searchResult([]);
  }

  const openModal = () => {
    setIsBottomSheetVisible(true);
    setIsFocused(false);
  }

  return (
    <View style={styles.container}>
        
      {region && Platform.OS !== 'web' &&(
        <>  
          <MapView
            style={styles.map}
            customMapStyle={MapViewStyling}
            showsUserLocation={false}
            followsUserLocation={false}
            initialRegion={region}
            // provider={PROVIDER_GOOGLE}
          >
            <Marker 
              coordinate={{latitude: region.latitude, longitude: region.longitude}}
              title="Your Current Location"
              description="Your current location" 
            />
          </MapView>

        </>
      )}

      <Animated.View style={[styles.input_wrapper, animated, {borderTopLeftRadius: isFocused ? 20 : 0, borderTopRightRadius: isFocused ? 20 : 0}]}>

        {isFocused && <Pressable style={{ position: 'absolute', right: 20, top: 15, backgroundColor: '#222', width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={close}>
          <X size={23} color="#777" />
        </Pressable>}

        
        <View style={{marginTop: isFocused ? 58 : 18}}>
          {isFocused && <TextInput
            style={[styles.input_text, { borderColor: isFocused ? '#222' : '#efefef' }]}
            placeholder="Pick-up location"
            placeholderTextColor={'#777'}
            fontWeight="500"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />}
          <TextInput
            style={[styles.input_text, { borderColor: isFocused ? '#222' : '#efefef', marginTop: isFocused ? 20 : 0 }]}
            placeholder="Where to?"
            placeholderTextColor={'#777'}
            fontWeight="600"
            value={searchText}
            returnKeyType="done"
            onChangeText={handleText}
            autoCorrect={false}
            onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
          />

          <Pressable onPress={() => router.push('ChooseRide')}>
            <Icon name="search" size={25} color="#222" />
          </Pressable>
        </View>
          {isFocused && searchResult.length > 0 &&(
            <FlatList
              style={{marginTop: 30, width: '100%'}}
              nestedScrollEnabled={true}
              data={searchResult}
              keyExtractor={(item) => item.place_id.toString()}
              renderItem={({item}) => {
                console.log("These are the results:",{item})
                return(
                  <Pressable
                    style={({pressed}) => [{backgroundColor: pressed ? '#dedede' : '#fff'}]}
                    onPress={openModal}
                  >
                    <Text style={[styles.location_name,  
                      {borderBottomColor: item?.addresstype ? '#ddd' : '#fff'}]}>
                        {item ? 
                          (item?.name || item?.addresstype?.state || item?.addresstype?.country ||"Location Not Found") : "No Address Data"
                        }
                    </Text>
                    
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 5, }}>
                      <Text>{item?.type}</Text>
                      <Text style={{color: 'green', fontWeight: 'light', fontSize: 16, marginLeft: 5}}>{item?.addresstype}</Text>
                    </View>

                  </Pressable>
                )
              }}
            />
          )}
      </Animated.View>

      <BottomSheet />

      {isBottomSheetVisible && <ChooseRide visible={isBottomSheetVisible} setIsVisible={setIsBottomSheetVisible} />}

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
    
  },
  location_name: {
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 5,
    color: '#222',
    
  }
});
