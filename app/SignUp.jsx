import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import {registerUser, auth} from '../app/Utils/Firebase/Auth'
import { onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import { MotiView } from 'moti';


function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(false)
  const [hideMessage, setHideMessage] = useState(false);
  const [nameMsg, setNameMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const [emailMsg, setEmailMsg] = useState(false);
  const [confirmPassMsg, setConfirmPassMsg] = useState(false);
  const [borderColor, setBorderColor] = useState('#cecece');
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return unsubscribe;
  }, [])

  useEffect(() => {
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  }, [password, confirmPassword]);
  

  // const showMessage = (msg) => {
  //   setMessage(msg);
  //   setTimeout(() => {
  //     setMessage("");
  //     setHideMessage(false);
  //   }, 1000)
  // }

  const handleSignUp =  () => {
    // const trimmedName = name.trim()
    if(!name){
      setNameMsg(true)
      // if(name){
      //   setNameMsg(false)
      //   return;
      // }
    }
    if(!email){
      setEmailMsg(true)
    }  
    if(!password){
      setPasswordMsg(true)
    } 
    if(!confirmPassword){
      setConfirmPassMsg(true)
    } 
    if(name && email && password && confirmPassword){
      setConfirmPassMsg(false)
      setEmailMsg(false)
      setNameMsg(false)
      setPasswordMsg(false)
      if(password !== confirmPassword){
        console.log('Passwords do not match')
        setPasswordMsg(true)
        setConfirmPassMsg(true)
      }
      else{
        console.log('Button Pressed, confam')

      }
    } 
  };
  

  
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back('AuthScreen')}>
        <Icon name="angle-left" color="white" size={30} />
      </TouchableOpacity>

      <View style={styles.welcome_text_wrapper}>
        <Text style={styles.welcome_text}>Hello! Sign up to get started</Text>
      </View>

      <View style={styles.input_wrapper}>
        <TextInput
          style={[styles.input_text, nameMsg && !name ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Username"
          placeholderTextColor="#717171"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(text) => setName(text)}
          onBlur={() => setBorderColor(name.length < 1 ? 'red' : '#cecece')}
        
        />

        <TextInput
          style={[styles.input_text, emailMsg && !email ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Email or Phone Number"
          placeholderTextColor="#717171"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChange={(text) => setEmail(text)}

        />

        <TextInput
          style={[styles.input_text, passwordMsg && !password || password !== confirmPassword ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Password"
          placeholderTextColor="#717171"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
          
        />
        <TextInput
          style={[styles.input_text, confirmPassMsg && !confirmPassword || password !== confirmPassword ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Confirm Password"
          placeholderTextColor="#717171"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.sign_in_button} onPress={handleSignUp}>
        <Text style={styles.text_sign_in}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.seperator_wrapper}>
        <View style={styles.seperator}></View>
        <Text style={styles.seperator_text}>Or Sign Up With</Text>
        <View style={styles.seperator}></View>
      </View>

      <View style={styles.social_media_wrapper}>
        <TouchableOpacity style={styles.social_icon}>
          <Icon name="facebook" color="white" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_icon}>
          <Icon name="google" color="white" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_icon}>
          <Icon name="apple" color="white" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.sign_up_wrapper}>
        <Text style={styles.no_account_text}>Already have an account?</Text>
        <TouchableOpacity style={styles.sign_up_button}>
          <Text style={styles.text_signup}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* {displayMessage && <MotiView style={{ position: 'absolute', width: '100%', justifyContent: 'center', alignItems: 'center', top: 90}}
        from={{opacity: 0, translateY: -50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
      >
        <View style={styles.message_wrapper}>
          <Text style={styles.message}>{showMessage}</Text>
        </View>
      </MotiView>} */}

      {hideMessage && <MotiView style={{ position: 'absolute', width: '100%', justifyContent: 'center', alignItems: 'center', top: 90}}
        // from={{opacity: 0, translateY: -50}}
        // animate={hideMessage ? {opacity: 0, translateY: -50} : {opacity: 1, translateY: 0}}
        // transition={{ type: 'spring', stiffness: 120, damping: 10 }}
      >
        <View style={styles.message_wrapper}>
          <Text style={styles.message}>{message}</Text>
        </View>
      </MotiView>}
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome_text_wrapper: {
    width: '100%',
    paddingHorizontal: 20
  },
  welcome_text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
    marginTop: 120,
    textAlign: 'left'
  },
  icon_wrapper: {
    position: 'absolute',
    top: 70,
    left: 20,
    borderWidth: 1,
    borderColor: '#5d5d5d',
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_wrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40
  },
  input_text: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 20,
  },
  forgot_password: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: '60%',
    marginBottom: 30,

  },
  sign_in_button: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text_sign_in: {
    color: '#222',
    fontSize: 17,
    fontWeight: '700',
  },
  seperator_wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  seperator: {
    width: '30%',
    height: 1,
    backgroundColor: '#fff',
  },
  seperator_text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
    marginHorizontal: 10,
  },
  social_media_wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
    gap: 10
  },
  social_icon: {
    borderWidth: 1,
    borderColor: '#5d5d5d',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',   
  },
  sign_up_wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 40,
    gap: 5
  },
  no_account_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  text_signup: {
    color: '#f40808',
    fontSize: 20,
    fontWeight: '700',
  },
  message_wrapper: {
    width: '80%',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#f50000',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10
  },
});
