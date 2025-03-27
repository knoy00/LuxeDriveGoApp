import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { SafeAreaView } from "react-native";
import { useState } from "react";
import 'react-native-reanimated';


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack initialRouteName="AuthScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="AuthScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="ProfileInfoScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SettingsScreen" options={{ headerShown: false }} />
        <Stack.Screen name="LoginSecurity" options={{ headerShown: false }} />
        <Stack.Screen name="DataPrivacy" options={{ headerShown: false }} />
        <Stack.Screen name="AddAddress" options={{ headerShown: false }} />
        <Stack.Screen name="AddHome" options={{ headerShown: false }} />
        <Stack.Screen name="AddWork" options={{ headerShown: false }} />
        <Stack.Screen name="AddLocation" options={{ headerShown: false }} />
        <Stack.Screen name="Logout" options={{ headerShown: false }} />
        {/* <Stack.Screen name="Button" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="ModalSheet" options={{ headerShown: false }} /> */}
        <Stack.Screen name="PinSecurity" options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmRide" options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}


