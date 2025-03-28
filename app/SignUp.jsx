import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, StatusBar, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
// import {registerUser, auth} from '../app/Utils/Firebase/Auth'
// import { onAuthStateChanged } from 'firebase/auth';
import { MotiView } from 'moti';
import { Eye } from 'lucide-react-native';
import { EyeOff } from 'lucide-react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../app/Utils/Firebase/Firebase'


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
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [nameMsg, setNameMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const [emailMsg, setEmailMsg] = useState(false);
  const [confirmPassMsg, setConfirmPassMsg] = useState(false);
  const [borderColor, setBorderColor] = useState('#cecece');
  const [showMessage, setShowMessage] = useState("");

  const auth = FIREBASE_AUTH;
  
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   })
  //   return () =>  unsubscribe();
  // }, [user])

  useEffect(() => {
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  }, [password, confirmPassword]);
  

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  
  const toggleConfirmPasswordVisibility = () => {
    setHideConfirmPassword(!hideConfirmPassword);
  };


  // const handleSignUp = async () => {
  //   // Validation
  //   if (!name) {
  //     setNameMsg(true);
  //   } else {
  //     setNameMsg(false);
  //   }
  
  //   if (!email) {
  //     setEmailMsg(true);
  //   } else {
  //     setEmailMsg(false);
  //   }
  
  //   if (!password) {
  //     setPasswordMsg(true);
  //   } else {
  //     setPasswordMsg(false);
  //   }
  
  //   if (!confirmPassword) {
  //     setConfirmPassMsg(true);
  //   } else {
  //     setConfirmPassMsg(false);
  //   }
  
  //   // Check if any validation failed
  //   if (!name || !email || !password || !confirmPassword) {
  //     return; // Exit early
  //   }
  
  //   // Password-specific validations
  //   if (password.length < 8 || confirmPassword.length < 8) {
  //     setPasswordMsg(true);
  //     setConfirmPassMsg(true);
  //     return; // Exit if password length is insufficient
  //   }
  
  //   if (password !== confirmPassword) {
  //     setPasswordMsg(true);
  //     setConfirmPassMsg(true);
  //     return; // Exit if passwords don't match
  //   }
  
  //   // Proceed with user registration
  //   try {
  //     await registerUser(email, password);
  //     setDisplayMessage(true);
  //     setShowMessage("User Registered Successfully");
  
  //     setTimeout(() => {
  //       setDisplayMessage(false);
  //       setShowMessage("");
  //       router.replace("/(tabs)");
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Registration Error:", error.message);
  //     setDisplayMessage(true);
  //     setShowMessage(`Registration Failure: ${error.message}, code: ${error.code}}`);
  
  //     setTimeout(() => {
  //       setDisplayMessage(false);
  //       setShowMessage("");
  //     }, 3000);
  //   }
  // };
  
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("Registration Success");
    }
    catch(error){
      console.log("Registration Error", error);
    }
  }
  
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
        />

        <TextInput
          style={[styles.input_text, emailMsg && !email ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Email"
          placeholderTextColor="#717171"
          // keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChange={(text) => setEmail(text)}

        />

        <TextInput
          style={[styles.input_text, passwordMsg && !password || password !== confirmPassword ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Password (8+ characters)"
          placeholderTextColor="#717171"
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
          
        />
        <Pressable style={{position: 'absolute', right: 30, top: 150}} onPress={togglePasswordVisibility}>
          {!hidePassword ? <Eye size={25} color="white" /> : <EyeOff size={25} color="white" />}
        </Pressable>

        <TextInput
          style={[styles.input_text, confirmPassMsg && !confirmPassword || password !== confirmPassword ? {borderColor: 'red'} : {borderColor: borderColor}]}
          placeholder="Confirm Password (8+ characters)"
          placeholderTextColor="#717171"
          secureTextEntry={hideConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <Pressable style={{position: 'absolute', right: 30, top: 220}} onPress={toggleConfirmPasswordVisibility}>
          {!hideConfirmPassword ? <Eye size={25} color="white" /> : <EyeOff size={25} color="white" />}
        </Pressable>
      </View>

      <TouchableOpacity style={styles.sign_in_button} onPress={signIn}>
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
    borderWidth: 2,
    borderColor: '#888',
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
    color: '#111',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10
  },
});
