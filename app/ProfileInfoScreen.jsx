import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';

const ProfileInfoScreen = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back('Profile')}>
            <Icon name="angle-left" color="#efefef" size={30} />
        </TouchableOpacity>

        <View style={styles.header_wrapper}>
            <Text style={styles.header_text}>Profile Information</Text>
        </View>

        <View style={styles.info_wrapper}>
            <Icon name="id-card" color="#888" size={20} />
            <Text style={styles.info_text}>Kelvin Osei Yeboah</Text>
        </View>
        <View style={styles.info_wrapper}>
            <Icon name="phone" color="#888" size={20} />
            <Text style={styles.info_text}>(233) 55 55 55 55</Text>
        </View>
        <View style={styles.info_wrapper}>
            <Icon name="envelope" color="#888" size={20} />
            <Text style={styles.info_text}>kelvinyeboah@gmail.com</Text>
        </View>
        {/* <View style={styles.info_wrapper}>
            <Icon name="user" color="#888" size={28} />
            <Text style={styles.info_text}>Kelvin Osei Yeboah</Text>
        </View> */}
    </View>
  )
}

export default ProfileInfoScreen

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
    info_wrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '95%',
        gap: 10,
        marginTop: 20,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#dedede',
        paddingVertical: 15
    },
    info_text: {
        fontSize: 18,
        color: '#333',
        marginLeft: 20,
        letterSpacing: .02,
        paddingHorizontal: 5,
        fontWeight: 600
    }
})