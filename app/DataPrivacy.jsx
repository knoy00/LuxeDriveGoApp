import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const DataPrivacy = () => {
    const router = useRouter();
    
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back()}>
            <Icon name="angle-left" color="#efefef" size={30} />
        </TouchableOpacity>

        <View style={styles.header_wrapper}>
            <Text style={styles.header_text}>Data and Privacy</Text>
        </View>

        <TouchableOpacity style={styles.option_wrapper}>
            <View style={styles.option_name_wrapper}>
                <Icon name="database" color="#222" size={21} />
                <Text style={styles.option_text}>Download Data</Text>
            </View>
            <Icon name="angle-right" color="#222" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option_wrapper}>
            <View style={styles.option_name_wrapper}>
                <Icon name="lock" color="#222" size={21} />
                <Text style={styles.option_text}>App Permisssions</Text>
            </View>
            <Icon name="angle-right" color="#222" size={25} />
        </TouchableOpacity>
    </View>
  )
}

export default DataPrivacy

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
    }
    
})