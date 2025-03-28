import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import {FIREBASE_AUTH} from '../Utils/Firebase/Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { create } from 'react-test-renderer';



const Trips = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("Registration Success");
    }
    catch (error){
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} style={styles.textField}/>
      <TextInput placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} style={styles.textField}></TextInput>
      <Pressable onPress={signIn}>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default Trips

const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: '#F8F8F8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    width: '100%',
    height: 40,
    borderWidth: 1, 
    borderColor: '#111',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
})