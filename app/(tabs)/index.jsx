import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Pressable, Keyboard, FlatList, Text, ScrollView,Image } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import * as Location from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import {X, Bus, LocateFixed, MousePointer2, Search} from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import axios from 'axios';
import MapViewStyling from '../../app/Utils/MapViewStyiling.json'
import { useRouter } from 'expo-router';
import ChooseRide from '../ChooseRide';
import { Platform } from 'react-native';
import LocateDriver from '../LocateDriver';



function Index() {

  const [index, setIndex] = useState(0);

  const routeCoords = [
    { latitude: 5.672863, longitude: -0.108272 },
    { latitude: 5.673051, longitude: -0.108262 },
    { latitude: 5.673536, longitude: -0.108259 },
    { latitude: 5.673641, longitude: -0.108266 },
    { latitude: 5.673789, longitude: -0.108289 },
    { latitude: 5.6741, longitude: -0.108299 },
    { latitude: 5.674597, longitude: -0.108281 },
    { latitude: 5.675246, longitude: -0.108251 },
    { latitude: 5.675652, longitude: -0.108234 },
    { latitude: 5.67607, longitude: -0.108214 },
    { latitude: 5.676468, longitude: -0.108216 },
    { latitude: 5.676954, longitude: -0.10822 },
    { latitude: 5.677185, longitude: -0.108216 },
    { latitude: 5.678083, longitude: -0.108179 },
    { latitude: 5.679044, longitude: -0.108147 },
    { latitude: 5.679217, longitude: -0.108142 },
    { latitude: 5.679591, longitude: -0.108138 },
    { latitude: 5.679977, longitude: -0.108133 },
    { latitude: 5.68047, longitude: -0.108126 },
    { latitude: 5.680798, longitude: -0.108114 },
    { latitude: 5.681167, longitude: -0.108101 },
    { latitude: 5.682595, longitude: -0.108045 },
    { latitude: 5.683783, longitude: -0.108008 },
    { latitude: 5.684957, longitude: -0.107953 },
    { latitude: 5.685198, longitude: -0.107964 },
    { latitude: 5.685853, longitude: -0.107977 },
    { latitude: 5.686303, longitude: -0.107977 },
    { latitude: 5.686596, longitude: -0.107976 },
    { latitude: 5.686775, longitude: -0.107984 },
    { latitude: 5.687008, longitude: -0.10799 },
    { latitude: 5.687294, longitude: -0.107982 },
    { latitude: 5.687484, longitude: -0.107976 },
    { latitude: 5.687653, longitude: -0.107971 },
    { latitude: 5.687818, longitude: -0.107959 },
    { latitude: 5.687926, longitude: -0.10793 },
    { latitude: 5.688012, longitude: -0.107923 },
    { latitude: 5.688104, longitude: -0.107927 },
    { latitude: 5.688443, longitude: -0.107979 },
    { latitude: 5.688595, longitude: -0.107992 },
    { latitude: 5.68878, longitude: -0.107989 },
    { latitude: 5.68939, longitude: -0.107951 },
    { latitude: 5.689668, longitude: -0.107921 },
    { latitude: 5.689854, longitude: -0.107908 },
    { latitude: 5.689978, longitude: -0.107909 },
    { latitude: 5.690116, longitude: -0.107922 }
  ];

  const routeCoordsTwo = [
    {latitude: 5.6837623, longitude: -0.1093040},
  ]



  useEffect(() => {
    const interval = setInterval(() => {
      if(index < routeCoords.length - 1){
        setIndex(index + 1);
      }
      else {
        clearInterval(interval);
      }
    }, 2000)
    return () => clearInterval(interval);
  }, [index])


  const [isDestination, setIsDestination] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })

  let MapView, Marker;
  if (Platform.OS !== 'web') {
    MapView = require('react-native-maps').default;
    Marker = require('react-native-maps').Marker;
  }
  const router = useRouter()

  const [region, setRegion] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isPolyline, setIsPolyline] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [locationName, setLocationName] = useState('');

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

      let address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })

      if(address.length > 0){
        const place =  address[0]
        setLocationName(place.name)
      }

      console.log(place)
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

  const openModal = (selectedLoc) => {
    setIsDestination({
      latitude: selectedLoc.lat,
      longitude: selectedLoc.lon,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    })
    setIsPolyline(true)
    
    setIsBottomSheetVisible(true);
    setIsFocused(false);
    setSelectedResult(selectedLoc)
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
            {/* Current Location Marker */}
            <Marker 
              coordinate={{latitude: region.latitude, longitude: region.longitude}}
              title="Your Current Location"
              description="Your current location" 
            />

            {/* Destinatoin Marker */}
            <Marker 
              coordinate={{latitude: isDestination.latitude, longitude: isDestination.longitude}}
              title="Your destination"
              description="Your destination" 
            />

            {/* Driver Marker 1 */}
            <Marker 
              coordinate={routeCoords[index]}
              title="Driver Location"
              description="Driver Location" 
              
            >
              <Image style={{width: 35, height: 50, resizeMode: 'contain', transform: [{rotate: '90deg'}]}} source={require('../../assets/icons/driver.png')} />
            </Marker>

            {/* Driver Marker 2 */}
            <Marker 
              coordinate={routeCoordsTwo[0]}
              title="Driver Location"
              description="Driver Location" 
              
            >
              <Image style={{width: 35, height: 50, resizeMode: 'contain', transform: [{rotate: '180deg'}]}} source={require('../../assets/icons/driver.png')} />
            </Marker>


            

            {/* Polyline for the route */}
           {isPolyline && <Polyline
              coordinates={[
                { latitude: region.latitude, longitude: region.longitude },
                { latitude: isDestination.latitude, longitude: isDestination.longitude },
              ]}
              strokeColor="#222"
              strokeJoin="bevel"
              strokeOpacity={0.8}
              strokeWidth={3}
            />}
          </MapView>

        </>
      )}

      <Animated.View style={[styles.input_wrapper, animated, {borderTopLeftRadius: isFocused ? 20 : 0, borderTopRightRadius: isFocused ? 20 : 0}]}>

        {isFocused && <Pressable style={{ position: 'absolute', right: 20, top: 15, backgroundColor: '#222', width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} onPress={close}>
          <X size={23} color="#777" />
        </Pressable>}

        {isFocused && <View style={{alignItems: 'center', marginTop: 20 }}>
          <Text style={{fontSize: 25, fontWeight: '500', color: '#222'}} >Your route</Text>
        </View>}

        
        <View style={{marginTop: isFocused ? 20 : 18}}>
          {isFocused && <TextInput
            style={[styles.input_text, { borderColor: isFocused ? '#222' : '#efefef' }]}
            placeholder='Pickup Location'
            placeholderTextColor={'#777'}
            fontWeight="500"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={locationName}
          />}

            <MousePointer2 style={{position: 'absolute', top: 12, left: 10}} size={25} color="#222"  />

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

          <Search size={25} color="#666" style={{position: 'absolute', top: 82, left: 10}} />
        </View>
          {isFocused && searchResult.length > 0 &&(
            <FlatList
              style={{marginTop: 30, width: '100%'}}
              nestedScrollEnabled={true}
              data={searchResult}
              keyExtractor={(item) => item.place_id ? item.place_id.toString() : Math.randon().toString()}
              renderItem={({item}) => {
                console.log("These are the results:",{item})
                return(
                  <Pressable
                    style={({pressed}) => [{backgroundColor: pressed ? '#dedede' : '#fff'}]}
                    onPress={() => openModal(item)}
                  >
                    <Text style={[styles.location_name,  
                      {borderBottomColor: item?.addresstype ? '#ddd' : '#fff'}]}>
                        {item ? 
                          (item?.name || item?.addresstype ||"Location Not Found") : "No Address Data"
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

      {isBottomSheetVisible && <ChooseRide visible={isBottomSheetVisible} setIsVisible={setIsBottomSheetVisible} placeholderDestination={selectedResult?.name} />}

      {<LocateDriver />}

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
    paddingHorizontal: 40,
    color: '#222222',
    fontSize: 18,
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
