import { View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
            name="index"  
            options={{
                title: 'Home',
                tabBarLabelStyle: {fontWeight: 'bold', fontSize: 10}, 
                tabBarActiveTintColor: '#222',
                tabBarInactiveTintColor: '#bbbbbb',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <View className='w-[50] items-center justify-center' >
                        <Icon name="home" size={25} color={focused ? '#222' : '#bbbbbb'}/>
                        {/* <Text className='font-bold'>Home</Text> */}
                    </View>
                )
            }}
        />

        <Tabs.Screen 
            name="Trips"  
            options={{
                title: 'Trips',
                tabBarLabelStyle: {fontWeight: 'bold', fontSize: 10},  
                tabBarActiveTintColor: '#222',
                tabBarInactiveTintColor: '#bbbbbb',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <View className='w-[50] items-center justify-center' >
                        <Icon name="history" size={25} color={focused ? '#222' : '#bbbbbb'}/>
                        {/* <Text className='font-bold'>Home</Text> */}
                    </View>
                )
            }}
        />

        <Tabs.Screen 
            name="Explore"  
            options={{
                title: 'Explore',
                tabBarLabelStyle: {fontWeight: 'bold', fontSize: 10},  
                tabBarActiveTintColor: '#222',
                tabBarInactiveTintColor: '#bbbbbb',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <View className='w-[50] items-center justify-center' >
                        <Icon name="compass" size={25} color={focused ? '#222' : '#bbbbbb'}/>
                        {/* <Text className='font-bold'>Home</Text> */}
                    </View>
                )
            }}
        />

        <Tabs.Screen 
            name="Profile"  
            options={{
                title: 'Profile',
                tabBarLabelStyle: {fontWeight: 'bold', fontSize: 10},  
                tabBarActiveTintColor: '#222',
                tabBarInactiveTintColor: '#bbbbbb',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <View className='w-[50] items-center justify-center' >
                        <Icon name="user" size={25} color={focused ? '#222' : '#bbbbbb'}/>
                        {/* <Text className='font-bold'>Home</Text> */}
                    </View>
                )
            }}
        />

           
    </Tabs>
  )
}

export default _layout