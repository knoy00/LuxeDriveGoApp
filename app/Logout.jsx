import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from './Utils/Firebase/Firebase';

const Logout = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);

    const auth = FIREBASE_AUTH

    const handleClose = () => {
        setIsOpen(false);
    }

    // useEffect(() => {
    //     console.log()
    // })

    const logout = async () => {
        console.log("Pressed")  
       const response = await signOut(auth)
       console.log("Worked")

       setTimeout(() => {
            while (router.canGoBack()) { 
                router.back();
            }
            router.replace('/AuthScreen');
       },1500)
    }
  return (
    <>
        {isOpen && <View style={styles.container} >
        <View style={styles.logout_container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>

                <Pressable style={styles.option_name_wrapper} >
                    <Icon name="exclamation" color="red" size={20} />
                    <Text style={styles.option_text}>Logout</Text>
                </Pressable>

                <Icon name="close" size={20} color="#fff" onPress={handleClose}/>
            </View>

            <Text style={{color: '#fff', fontWeight: 'bold', marginTop: 10, fontSize: 17}}>Are you sure you want to logout?</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 10, marginTop: 20}}>
                <Pressable onPress={handleClose} style={{backgroundColor: 'red', padding: 10, borderRadius: 5, width: '45%',  }}>
                    <Text style={{color: '#fff', fontWeight: 'bold', padding: 10, textAlign: 'center'}}>Cancel</Text>
                </Pressable>

                <Pressable onPress={logout} style={{backgroundColor: '#222', padding: 10, borderRadius: 5, width: '45%' }}>
                    <Text style={{color: '#fff', fontWeight: 'bold', padding: 10, textAlign: 'center'}}>Logout</Text>
                </Pressable>



            </View>
        </View>
        </View>}
    </>
  )
}

export default Logout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000099',
        alignItems: 'center',
    },
    logout_container: {
        width: '90%',
        backgroundColor: '#333',
        padding: 20,
        height: 170,
        borderRadius: 10,
        top: '70%'
    },  
    option_name_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    option_text: {
        fontSize: 18,
        fontWeight: 400,
        color: 'red',
        letterSpacing: .02,
        marginLeft: 10
    }
})