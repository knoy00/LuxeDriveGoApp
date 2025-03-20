import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="AuthScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="ProfileInfoScreen" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}


