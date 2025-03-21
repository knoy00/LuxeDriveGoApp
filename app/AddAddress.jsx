import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from 'expo-router';

const AddAddress = ({header}) => {
    const router = useRouter();
  return (
    <View  style={styles.container}>
        <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back('Profile')}>
            <Icon name="angle-left" color="#efefef" size={25} />
        </TouchableOpacity>

        <View style={styles.header_wrapper}>
            <Text style={styles.header_text}>Add {header}</Text>
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

        <ScrollView style={styles.recent_wrapper}>
            <Text style={{fontSize: 25, fontWeight: 600, color: '#222', marginTop: 10}}>Recent Searches</Text>
            <View style={{marginTop: 20}}>
                <View style={styles.recent_item_wrapper}>
                    <Icon name='history' size={20} color='#777' />
                    <View>
                        <Text style={styles.location_text}>University Farm Road</Text>
                        <Text style={styles.sub_location_text}>Tema</Text>
                    </View>
                </View>
                
                <View style={styles.recent_item_wrapper}>
                    <Icon name='history' size={20} color='#777' />
                    <View>
                        <Text style={styles.location_text}>Madina</Text>
                        <Text style={styles.sub_location_text}>Ghana</Text>
                    </View>
                </View>

                <View style={styles.recent_item_wrapper}>
                    <Icon name='history' size={20} color='#777' />
                    <View>
                        <Text style={styles.location_text}>Accra Mall</Text>
                        <Text style={styles.sub_location_text}>Accra</Text>
                    </View>
                </View>

                <View style={styles.recent_item_wrapper}>
                    <Icon name='history' size={20} color='#777' />
                    <View>
                        <Text style={styles.location_text}>Kaneshie Market</Text>
                        <Text style={styles.sub_location_text}>Accra</Text>
                    </View>
                </View>

                <View style={styles.recent_item_wrapper}>
                    <Icon name='history' size={20} color='#777' />
                    <View>
                        <Text style={styles.location_text}>Lakeside Police Station</Text>
                        <Text style={styles.sub_location_text}>Tema</Text>
                    </View>
                </View>

                <View style={styles.recent_item_wrapper}>
                    <Icon name='history' size={20} color='#777' />
                    <View>
                        <Text style={styles.location_text}>University Farm Road</Text>
                        <Text style={styles.sub_location_text}>Tema</Text>
                    </View>
                </View>



            </View>
        </ScrollView>
      
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
    },
    recent_wrapper: {
        width: '100%',
        paddingHorizontal: 15,
        padding: 10,
        marginTop: 30,
        height: 70
    },
    recent_item_wrapper: {
        width: '100%',  
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f8f8f8',
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#efefef',
        gap: 20,
        marginTop: 0
    },
    location_text: {
        color: '#222',
        fontSize: 17,
        fontWeight: 600
    },
    sub_location_text: {
        color: '#777',
        fontSize: 15,
        fontWeight: 400
    }   
    
})