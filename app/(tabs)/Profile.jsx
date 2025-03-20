import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const Profile = () => {

    const router = useRouter();
  return (
    <View style={styles.container}>
        <View style={styles.header_container}>
            <View style={styles.user_icon_bg}>
                <Icon name="user" color="grey" size={40} solid/>
            </View>

            <View>
                <Text style={{color: '#444', fontWeight: 'bold', fontSize: 32, top: 20 }}>Kelvin Osei Yeboah</Text>
            </View>

            <View style={styles.rating_container}>
                <Icon name="star" color="#ff5000" size={17} style={{paddingRight: 5}} solid/>
                <Text style={{color: '#111', fontWeight: 'bold', fontSize: 18, paddingRight: 5}}>4.9</Text>
                <Text style={{color: '#777', fontWeight: 'lightWeight', fontSize: 18}}>Rating</Text>
            </View>
        </View>

        <ScrollView style={styles.scroll_section}> 
            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]} onPress={() => router.push('ProfileInfoScreen')}>
                <Icon name="user" color="#888" size={27} />
                <Text style={styles.btn_text}>Personal Information</Text>
                
            </Pressable>

            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]} onPress={() => router.push('SettingsScreen')}>
                <Icon name="cog" color="#888" size={23} />
                <Text style={styles.btn_text}>Settings</Text>
                
            </Pressable>

            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]} onPress={() => router.push('LoginSecurity')}>
                <Icon name="shield" color="#888" size={23} />
                <Text style={styles.btn_text}>Login and Security</Text>
                
            </Pressable>

            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]}>
                <Icon name="lock" color="#888" size={23} />
                <Text style={styles.btn_text}>Privacy</Text>
                
            </Pressable>

            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]}>
                <Icon name="home" color="#888" size={23} />
                <Text style={styles.btn_text}>Add Home Address</Text>
                
            </Pressable>
            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]}>
                <Icon name="building" color="#888" size={23} />
                <Text style={styles.btn_text}>Add Workplace Address</Text>
                
            </Pressable>
            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]}>
                <Icon name="plus" color="#888" size={23} />
                <Text style={styles.btn_text}>Add Location</Text>
                
            </Pressable>
            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#eaeaea' : '#f5f5f5'}]}>
                <Icon name="sign-out" color="#888" size={23} />
                <Text style={styles.btn_text}>Logout</Text>
                
            </Pressable>
            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#ccc' : '#f5f5f5'}]}>
                <Icon name="trash" color="#888" size={23} bold/>
                <Text style={styles.btn_text}>Delete Account</Text>
                
            </Pressable>

            <Pressable style={({pressed}) => [styles.setting_btn, {backgroundColor: pressed ? '#ccc' : '#f5f5f5'}]}>
                <Icon name="refresh" color="#888" size={23} bold/>
                <Text style={styles.btn_text}>Check for updates</Text>
                
            </Pressable>

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
        backgroundColor: '#fff',
        width: '100%',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
        height: 280
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
        top: 30, 
    },
    scroll_section: {
        backgroundColor: '#f5f5f5',
        width: '100%',
        top: 0,
        paddingHorizontal: 10,
        flex: 1
    },
    setting_btn: {
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        gap: 10,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    
    },
    btn_text: {
        fontSize: 18,
        fontWeight: 'light',
        color: '#666',
    }
    

})