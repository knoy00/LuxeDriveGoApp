import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';

const AddAddress = () => {
    const router = useRouter();
  return (
    <View  style={styles.container}>
        <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back('Profile')}>
            <Icon name="angle-left" color="#efefef" size={25} />
        </TouchableOpacity>

        <View style={styles.header_wrapper}>
            <Text style={styles.header_text}>ADD Someplace</Text>
        </View>

        <View style={styles.input_wrapper}>
            <TextInput
                style={styles.input_text}
                placeholder="Enter your address"
                placeholderTextColor="#777"
                multiline={false}
            />
            <Icon name="map-marker" color="#777" size={25} style={{position: 'absolute', top: 22, left: 30}}/>
        </View>
      
    </View>
  )
}

export default AddAddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    icon_wrapper: {
        position: 'absolute',
        top: 70,
        left: 20,
        borderWidth: 2,
        borderColor: '#efefef',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    header_wrapper: {
        width: '100%',
        marginTop: 0,
        backgroundColor: '#222',
        height: 220,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#efefef',
        
    },
    header_text: {
        fontSize: 40,
        fontWeight: 600,
        textAlign: 'left',
        color: '#efefef',
        top: 130,
        letterSpacing: .02
    },
    input_wrapper: {
        width: '100%',
        paddingHorizontal: 15,
        padding: 10,
        marginTop: 30,
        height: 70
    },
    input_text: {
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 20,
        color: '#222222',
        fontSize: 17,
        fontWeight: '400',
        backgroundColor: '#eee',
        marginBottom: 10,
        height: '100%',
        borderWidth: 2,
        fontWeight: 600,
        paddingLeft: 50
    }
    
})