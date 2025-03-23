import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';

const PinSecurity = () => {

    const [pin1, setPin1] = useState(false);
    const [pin2, setPin2] = useState(false);
    const [pin3, setPin3] = useState(false);
    const [pin4, setPin4] = useState(false);
    const [pin, setPin] = useState([]);


    const registerPin = (num) => {
        if(typeof num !== 'number' || isNaN(num)) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setPin(prev => {
            const newPin = [...prev, num]; 
            updateIndicators(newPin.length); 
            return newPin;
        });
    };
    
    const deletePin = () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setPin(prev => {
        const newPin = prev.slice(0, -1);
        updateIndicators(newPin.length); 
        return newPin;
      });
    };
    
    const updateIndicators = (length) => {
      setPin1(length >= 1);
      setPin2(length >= 2);
      setPin3(length >= 3);
      setPin4(length >= 4);
    };

    useEffect(() => {
        console.log(pin);
    }, [pin])
  return (
    <View style={styles.container}>
        <View style={{marginTop: 130}}>
            <Pressable style={ ({pressed}) =>[{backgroundColor: pressed ? '#bbb' : '#efefef'},{ alignSelf: 'center', width: 40, height: 40, borderRadius: 30, backgroundColor: '#efefef', justifyContent: 'center', alignItems: 'center', marginBottom: 20, position: 'absolute', top: -60, left: 20}]}
            onPress={() => {[
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),

            ]}}>
                <Icon name="angle-left" color="#222" size={25} />
            </Pressable>

            <View style={{alignSelf: 'center', width: 90, height: 90, borderRadius: 50, backgroundColor: '#efefef', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                <Icon name="user" color="#222" size={58} />
            </View>
            

            <View style={{alignSelf: 'center', marginBottom: 20}}>
                <Text style={{fontWeight: 'lightWeight', fontSize: 20, color: '#777'}}>Welcome back, <Text style={{fontWeight: 'bold', fontSize: 20, color: '#222'}}>Kelvin</Text>  </Text>
            </View>

            <Text style={{fontWeight: 'lightWeight', fontSize: 17, marginBottom: 20, textAlign: 'center', color: '#777'}}>Enter PIN to continue</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: '40%', alignSelf: 'center' }}>
                {[...Array(4)].map((_, index) => (
                    <View key={index} style={[styles.pinBullets, { backgroundColor: index < pin.length ? '#222' : '#efefef' }]}></View>
                ))}
            </View>


            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, flexWrap: 'wrap', paddingHorizontal: 80}}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "delete"].map((num, index) => (
                <Pressable 
                  key={index} 
                  style={({ pressed }) => [
                    styles.inputField, 
                    { backgroundColor: index === 9 ? '#fff' : pressed ? '#bbb' : '#efefef' },
                  ]}
                  onPress={() => num === "delete" ? deletePin() : registerPin(num)}
                >
                    {num === "delete" ? <Icon name="chevron-left" size={20} color={"#222"} /> : <Text style={styles.input_text}>{num}</Text>}
                </Pressable>
            ))}


            </View>

            <Pressable>
                <Text style={{fontWeight: 'lightWeight', fontSize: 17, marginTop: 20, textAlign: 'center', color: '#777'}}>Sign out</Text>
            </Pressable>
        </View>
        <StatusBar style="dark" />
    </View>
  )
}

export default PinSecurity

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    pinBullets: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#eee',
        marginHorizontal: 5,
        marginBottom: 10,
    },
    inputField: {
        backgroundColor: '#efefef',
        width: 70,
        height: 70,
        borderRadius: 50,
        paddingHorizontal: 20,
        color: '#222222',
        fontSize: 17,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input_text :{
        fontSize: 20,
        color: '#222',
        fontWeight: 'regular'
    }
})