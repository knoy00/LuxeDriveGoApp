import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';

const ProfileInfoScreen = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back('Profile')}>
            <Icon name="angle-left" color="#000" size={30} />
        </TouchableOpacity>

        <View style={styles.header_wrapper}>
            <Text>Profile Information</Text>
        </View>
    </View>
  )
}

export default ProfileInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon_wrapper: {
        position: 'absolute',
        top: 70,
        left: 20,
        borderWidth: 1,
        borderColor: '#5d5d5d',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_wrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    }
})