import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar, Pressable  } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';
import * as Haptics from 'expo-haptics';
import * as LocalAuthentication from 'expo-local-authentication';
import {Alert} from 'react-native'



const LoginSecurity = () => {

    const checkFaceIDAvailability = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        const enrolled = await LocalAuthentication.isEnrolledAsync();

        if(!compatible || !enrolled){
            Alert.alert('Face ID is not available on this device');
            return false;
        }
        return true;
    }

    const authenticateUser = async () => {
        const isAvailable = await checkFaceIDAvailability();
        if(!isAvailable) return;

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login with Face ID',
            disableDeviceFallback: false,
            fallbackLabel: 'Use Passcode',
            cancelLabel: 'Cancel',
        })

        if(result.success){
            Alert.alert('Face ID Enabled');
            return true;
        }
        Alert.alert('Not Authenticated');
        return false;
    }

    const [isEnable, setIsEnable] = useState(false);

    const toggleSwitch = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        const authenticated = await authenticateUser();
        if(authenticated){
            setIsEnable(!isEnable);
        }
        
    }

    const router = useRouter();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back()}>
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

        <View style={[styles.option_wrapper]} >
            <View style={styles.option_name_wrapper}>
                <Icon name="smile-o" color="#222" size={21} />
                <Text style={styles.option_text}>Enable Face ID</Text>
            </View>
            <Pressable style={[styles.radio_btn_wrapper, isEnable ? {backgroundColor: '#2EA747', borderColor: '#2EA747' } : {}]} onPress={toggleSwitch}>
                <View style={[styles.radio_btn, isEnable ? {transform: [{translateX: 20}]} : {}]}></View>
            </Pressable>
        </View>

        <Pressable style={[styles.option_wrapper]} onPress={() => router.push('PinSecurity')}>
            <View style={styles.option_name_wrapper}>
                <Icon name="lock" color="#222" size={21} />
                <Text style={styles.option_text}>Enable PIN Security</Text>
            </View>
            <Icon name="angle-right" color="#222" size={25} />
        </Pressable>

        <ScrollView style={{width: '100%', marginTop: 0, padding: 20, flex: 1}} contentContainerStyle={{flexGrow: 1, paddingVertical: 20}}>
            <Text style={{fontSize: 25, fontWeight: 600, color: '#222'}}>Passkeys</Text>
            <Text style={{fontSize: 18, fontWeight: 400, color: '#F36621', marginTop: 20}}>Set up your Passkeys</Text>

            <Text style={{fontSize: 16, fontWeight: 400, color: '#777', marginTop: 10, paddingVertical: 20}}>Passkeys are a safer and easier way to sign in to your account without using a password. They use your device’s fingerprint, face recognition, or PIN to verify your identity. Unlike passwords, passkeys can't be stolen in phishing attacks, making your account more secure. With passkeys, logging in is fast, secure, and hassle-free! 🚀</Text>

            <Text style={{fontSize: 25, fontWeight: 600, color: '#222', marginTop: 10}}>Other login options</Text>

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
        </ScrollView>
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
        padding: 15,
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
        marginTop: 10,
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
    },
    radio_btn_wrapper: {
        justifyContent: 'center',
        backgroundColor: '#ccc',
        width: 45,
        height: 26,
        borderRadius: 50,
        paddingVertical: 0,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    radio_btn: {
        width: 23,
        height: 23,
        borderRadius: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: .5,
        left: 0,
        
    }
})