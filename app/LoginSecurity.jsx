import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';

const LoginSecurity = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back('Profile')}>
            <Icon name="angle-left" color="#efefef" size={30} />
        </TouchableOpacity>

        <View style={styles.header_wrapper}>
            <Text style={styles.header_text}>Login and Security</Text>
        </View>

        <TouchableOpacity style={styles.option_wrapper}>
            <View style={styles.option_name_wrapper}>
                <Icon name="key" color="#222" size={21} />
                <Text style={styles.option_text}>Change Password</Text>
            </View>
            <Icon name="angle-right" color="#222" size={25} />
        </TouchableOpacity>

        <View style={{width: '100%', marginTop: 20, padding: 20}}>
            <Text style={{fontSize: 25, fontWeight: 600, color: '#222'}}>Passkeys</Text>
            <Text style={{fontSize: 18, fontWeight: 400, color: '#F36621', marginTop: 20}}>Set up your Passkeys</Text>

            <Text style={{fontSize: 16, fontWeight: 400, color: '#777', marginTop: 10, paddingVertical: 20}}>Passkeys are a safer and easier way to sign in to your account without using a password. They use your device’s fingerprint, face recognition, or PIN to verify your identity. Unlike passwords, passkeys can't be stolen in phishing attacks, making your account more secure. With passkeys, logging in is fast, secure, and hassle-free! 🚀</Text>

            <Text style={{fontSize: 25, fontWeight: 600, color: '#222', marginTop: 20}}>Other login options</Text>

            <View style={{marginTop: 10}}>
                <TouchableOpacity style={styles.login_option_wrapper}>
                    <Icon name="google" color="red" size={25} />
                    <Text style={{fontSize: 18, fontWeight: 400, color: '#222', marginLeft: 5}}>Sign in with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_option_wrapper}>
                    <Icon name="apple" color="#000" size={25} />
                    <Text style={{fontSize: 18, fontWeight: 400, color: '#222', marginLeft: 5}}>Sign in with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_option_wrapper}>
                    <Icon name="facebook" color="#3b5998" size={25} />
                    <Text style={{fontSize: 18, fontWeight: 400, color: '#222', marginLeft: 10}}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginSecurity

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
    option_wrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 10,
    },
    option_name_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    option_text: {
        fontSize: 18,
        fontWeight: 400,
        color: '#333',
        letterSpacing: .02,
        marginLeft: 10
    },
    login_option_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 20,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
        padding: 10,
    },
    login_option_text: {
        fontSize: 18,
        fontWeight: 400,
        color: '#333',
        letterSpacing: .02,
        marginLeft: 10
    }
})