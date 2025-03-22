import React ,{useEffect}from 'react'
import {View, StyleSheet, Image} from "react-native"
import { useRouter } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function SplashScreen({}) {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.replace('/(tabs)')
        }, 500)
    }, [])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
        <Image 
            style={{width: 300, height: 300}}
            resizeMode='contain'
            source={require('../assets/icons/LuxeDrive_white.png')}
        />        
    </View>
    </GestureHandlerRootView>

  )
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        backgroundColor: '#111',
        height: '100%',
    }
})