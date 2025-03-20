import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header_container}>
            <View style={styles.user_icon_bg}>
                <Icon name="user" color="grey" size={40} />
            </View>

            <View>
                <Text style={{color: '#444', fontWeight: 'bold', fontSize: 32, top: 20 }}>Kelvin Osei Yeboah</Text>
            </View>

            <View style={styles.rating_container}>
                <Icon name="star" color="grey" size={20} style={{top: 20}} />
                <Text>4.9</Text>
                <Text>Rating</Text>
            </View>
        </View>

        <ScrollView>

        </ScrollView>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_container: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        top: 0,
        height: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    user_icon_bg: {
        backgroundColor: '#efefef',
        height: 80,
        width: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    rating_container: {
        flexDirection: 'row',
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

})