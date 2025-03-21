import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';

const Logout = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }
  return (
    <>
        {isOpen && <View style={styles.container} >
        <View style={styles.logout_container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>

                <View style={styles.option_name_wrapper}>
                    <Icon name="exclamation" color="red" size={20} />
                    <Text style={styles.option_text}>Logout</Text>
                </View>

                <Icon name="close" size={20} color="#fff" onPress={handleClose}/>
            </View>

            <Text style={{color: '#fff', fontWeight: 'bold', marginTop: 10, fontSize: 17}}>Are you sure you want to logout?</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 10, marginTop: 20}}>
                <Pressable onPress={handleClose} style={{backgroundColor: 'red', padding: 10, borderRadius: 5, width: '45%',  }}>
                    <Text style={{color: '#fff', fontWeight: 'bold', padding: 10, textAlign: 'center'}}>Cancel</Text>
                </Pressable>

                <Pressable onPress={() => router.replace('/AuthScreen')} style={{backgroundColor: '#222', padding: 10, borderRadius: 5, width: '45%' }}>
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