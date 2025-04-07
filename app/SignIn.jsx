import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, StatusBar, Dimensions, Pressable, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import {loginUser, auth} from '../app/Utils/Firebase/Auth'
import { onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import { Eye } from 'lucide-react-native';
import { EyeOff } from 'lucide-react-native';
import { MotiView } from 'moti';


function SignIn({}) {
  const router = useRouter();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [showMessage, setShowMessage] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(false)
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [borderColor, setBorderColor] = useState('#cecece');

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => unsubscribe();
  }, [user])


  useEffect(() => {
    console.log("Password:", password);
    console.log("Email:", email);
  }, [password, email]);



  const handleLogin = async () => {
    console.log("pressed");
  
    if (!email) {
      setEmailError(true);
      setShowMessage("Email is required");
      return;
    } else {
      setEmailError(false);
    }
  
    if (!password) {
      setPasswordError(true);
      setShowMessage("Password is required");
      return;
    } else {
      setPasswordError(false);
    }
  
    try {
      const response = await loginUser(email, password);
      Keyboard.dismiss()
      
  
      setDisplayMessage(true);
      setShowMessage("Login successful");
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setDisplayMessage(false);
        setShowMessage('');
        setIsSignedIn(true);
        router.replace('(tabs)');
      }, 1000);
    } catch (error) {
      // let errorMessage = "An error occurred";
      // if(error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {

      //   errorMessage = "Invalid email or password";

      //   setDisplayMessage(true);
      //   setShowMessage(errorMessage);

      //   setTimeout(() => {
      //     setDisplayMessage(false);
      //     setShowMessage('');
      //   }, 2500)
      //   return;
      // }
      console.log(`error: ${error}`);
      setDisplayMessage(true);
      setShowMessage(`Login Failed: ${error.message}`);
      setTimeout(() => {
        setDisplayMessage(false);
        setShowMessage('');
      }, 1200);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.icon_wrapper} onPress={() => router.back('AuthScreen')}>
        <Icon name="angle-left" color="white" size={30} />
      </TouchableOpacity>

      <View style={styles.welcome_text_wrapper}>
        <Text style={styles.welcome_text}>Welcome Back!</Text>
      </View>

      <View style={[styles.input_wrapper]}>
        <TextInput
          style={[styles.input_text, emailError && !email ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Email"
          placeholderTextColor="#ddd"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={[styles.input_text, passwordError && !password ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Password"
          placeholderTextColor="#ddd"
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Pressable style={{position: 'absolute', right: 30, top: 80}} onPress={togglePasswordVisibility}>
          {!hidePassword ? <Eye size={25} color="white" /> : <EyeOff size={25} color="white" />}
        </Pressable>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_password}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sign_in_button} onPress={handleLogin}>
        <Text style={styles.text_sign_in}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.seperator_wrapper}>
        <View style={styles.seperator}></View>
        <Text style={styles.seperator_text}>Or sign in with</Text>
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
        <Text style={styles.no_account_text}>Dont have an account?</Text>
        <TouchableOpacity style={styles.sign_up_button}>
          <Text style={styles.text_signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      

      {displayMessage && <MotiView style={{ position: 'absolute', width: '100%', justifyContent: 'center', alignItems: 'center', top: 90}}
        from={{opacity: 0, translateY: -50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
      >
        <View style={styles.message_wrapper}>
          <Text style={styles.message}>{showMessage}</Text>
        </View>
      </MotiView>}

      
    </SafeAreaView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#111',
    width: '100%',
    height: '100%',
  },
  welcome_text_wrapper: {
    width: '100%',
    paddingHorizontal: 20
  },
  welcome_text: {
    color: 'white',
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
    marginTop: 50,
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
    marginTop: 50,
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
    marginTop: 140,
    gap: 5
  },
  no_account_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  text_signup: {
    color: '#f40808',
    fontSize: 20,
    fontWeight: '500',
  },
  message_wrapper: {
    width: '80%',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10
  },
});
